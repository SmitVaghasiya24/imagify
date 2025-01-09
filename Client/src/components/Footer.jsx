import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 mt-20 px-4 sm:px-8 lg:px-16">
            <img src={assets.logo} alt="Logo" width={150} className="mx-auto sm:mx-0" />

            <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 hidden sm:block">
                Copyright @SolutionX.dev | All rights reserved.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start">
                <img src={assets.facebook_icon} width={35} alt="Facebook" />
                <img src={assets.twitter_icon} width={35} alt="Twitter" />
                <img src={assets.instagram_icon} width={35} alt="Instagram" />
            </div>
        </div>

    )
}

export default Footer