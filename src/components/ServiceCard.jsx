import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const ServiceCard = ({ icon, title, description }) => {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
        <Icon className="text-3xl text-blue-600 group-hover:text-white transition-all duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
        Learn More
        <HiOutlineArrowRight className="text-lg" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;