import { motion } from "framer-motion";
import { services } from "../../data/services";
import ServiceCard from "../ServiceCard";

const ServicesPreview = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide reliable IT solutions to keep your devices,
            network, and business running smoothly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;