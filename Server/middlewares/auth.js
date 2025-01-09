import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        return res.status(400).json({ success: false, message: "Access denied. Login Again" });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id
        } else {
            return res.status(400).json({ success: false, message: "Access denied. Login Again" });
        }

        next();

    }
    catch (error) {
        res.status(400).json({ success: false, message: "Invalid token" })
    }

}

export default userAuth