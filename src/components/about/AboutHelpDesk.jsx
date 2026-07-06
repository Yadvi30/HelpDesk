import { motion } from "framer-motion";

const AboutHelpDesk = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/teamwork.svg"
            alt="HelpDesk Team"
            className="w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Technology That Works,
            <span className="text-blue-600"> Support You Can Trust.</span>
          </h2>

          <p className="text-slate-600 leading-8 mb-5">
            HelpDesk is dedicated to delivering reliable and affordable IT
            solutions for individuals, startups, and businesses. Our focus is
            on simplifying technology and helping our clients solve real-world
            technical challenges.
          </p>

          <p className="text-slate-600 leading-8">
            From website development and networking to software installation,
            troubleshooting, and technical support, we aim to provide services
            that are fast, secure, and customer-focused.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHelpDesk;