import { stepsData } from "../assets/assets"
import { motion } from "framer-motion"


const Steps = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-16 sm:my-24 lg:my-32 px-4 sm:px-8 lg:px-16"
            initial={{ y: 100, opacity: 0.2 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
        >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">How it works</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg text-center">
                Transform Words Into Stunning Images
            </p>

            <div className="space-y-4 w-full max-w-3xl text-sm">
                {stepsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
                    >
                        <img width={40} src={item.icon} alt="" />
                        <div>
                            <h2 className="text-xl font-medium">{item.title}</h2>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

    )
}

export default Steps