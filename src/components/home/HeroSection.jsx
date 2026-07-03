import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-12">

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 ">

        <motion.div className="w-full md:w-1/2 space-y-6"  
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} > 

            <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Smart Complaint Management System
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight" >
                Raise Your Voice.
                <br />
                Build a Better Community.
            </h1>

            <p className="text-lg text-gray-600">
                Report local issues, track their progress in real time,
                and help create a cleaner, safer, and smarter community.
            </p>

            <div className="flex gap-4">

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Register Complaint
                </button>


                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Track Complaint
                </button>

            </div>

        </motion.div>

        <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{
                opacity: 1,
                x: 0,
                y: [0, -15, 0],
            }}
            transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                },
            }}
>
            <img
                src="/hero.svg"
                alt="HelpDesk Illustration"
                className="w-full max-w-md"
             />
        </motion.div>

    </div>

</section>
  );
};

export default HeroSection;