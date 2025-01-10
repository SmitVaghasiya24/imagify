import { useCallback, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const navigate = useNavigate()


    const loadCreditsData = useCallback(async () => {
        try {
            const { data } = await axios.get('https://imagify-p4zz.onrender.com/api/user/credits', { headers: { token } });
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }, [token]);

    const generateImage = async (prompt) => {

        if (credit === 0) {
            navigate('/buy');
            toast.error('No credit balance');
            return; 
        }

        try {
            const { data } = await axios.post('https://imagify-p4zz.onrender.com/api/image/generate-image', { prompt }, { headers: { token } });
            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            } else {
                console.log('error');
                toast.error(data.message);
                loadCreditsData();
                if (data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        } catch (error) {
            console.log(error.message);
            toast.error('No credit balance');
            navigate('/buy');
        }
    };


    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    useEffect(() => {
        if (token) {
            loadCreditsData()
        }
    }, [token, loadCreditsData])




    const value = {
        user, setUser, showLogin, setShowLogin, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage
    }

    return (
        < AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider >
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Validate 'children' prop
};

export default AppContextProvider