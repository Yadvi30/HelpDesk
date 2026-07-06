import { motion } from "framer-motion";
import { FaRocket, FaBullseye } from "react-icons/fa";

const MissionVision = () => {
  const cards = [
    {
      icon: <FaRocket size={36} />,
      title: "Our Mission",
      description:
        "To provide reliable, affordable, and innovative IT solutions that empower individuals, startups, and businesses to achieve their goals with confidence.",
    },
    {
      icon: <FaBullseye size={36} />,
      title: "Our Vision",
      description:
        "To become a trusted technology partner by delivering quality services, building lasting relationships, and making technology accessible to everyone.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Purpose
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Mission & Vision
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Everything we do is driven by our commitment to quality,
            innovation, and customer satisfaction.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {cards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default MissionVision;