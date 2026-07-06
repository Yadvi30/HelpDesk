import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-5">
            About HelpDesk
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Reliable IT Solutions
            <span className="text-blue-600"> For Everyone.</span>
          </h1>


          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
            HelpDesk provides reliable IT services including website
            development, networking, software installation and technical
            support to individuals, startups and businesses.
          </p>

            < br /><br />
          <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Explore Services
                </button>

                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                     Contact Us
                </button>
            </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/about.svg"
            alt="About HelpDesk"
            className="w-full max-w-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;