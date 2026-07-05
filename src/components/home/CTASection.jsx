import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden
                   max-w-7xl mx-auto
                   rounded-[40px]
                   bg-gradient-to-r
                   from-blue-700
                   via-blue-600
                   to-cyan-500
                   px-6
                   md:px-16
                   py-16"
      >

        {/* Blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT */}

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Need Professional IT Support?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

              Let's Build
              <br />
              Something Amazing
              <br />
              Together.

            </h2>

            <p className="text-blue-100 text-lg leading-8 mt-6">

              From website development and networking
              to Windows installation and technical support,
              our experts are ready to help your business grow.

            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button
                className="bg-white text-blue-600
                           px-8 py-4 rounded-xl
                           font-semibold
                           flex items-center
                           justify-center
                           gap-2
                           hover:scale-105
                           hover:shadow-xl
                          active:scale-95
                           transition-all"
              >
                Book a Service

                <FaArrowRight className="text-sm" />

              </button>

              <button
                className="border border-white
                           text-white
                           px-8 py-4
                           rounded-xl
                           hover:bg-white
                           hover:text-blue-600
                           transition"
              >
                Contact Us
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
          >
        <div className="relative">

        <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

        <img
            src="/cta.svg"
            alt="IT Support"
            className="relative z-10 w-full max-w-md"
        />

        </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default CTASection;