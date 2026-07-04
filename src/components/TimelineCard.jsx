import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const TimelineCard = ({
  id,
  step,
  icon,
  title,
  description,
  activeStep,
  setActiveStep,
  isLast,
}) => {
  const Icon = icon;

  return (
    <div
      className="group flex items-start gap-8"
      onMouseEnter={() => setActiveStep(id)}
    >
      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Grey Line */}
        {!isLast && (
          <div className="absolute top-8 w-1 h-[180px] bg-gray-200 rounded-full"></div>
        )}

        {/* Animated Gradient Line */}
        {!isLast && (
          <motion.div
            className="absolute top-8 w-1 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"
            initial={false}
            animate={{
              height: activeStep > id ? "180px" : "0px",
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Circle */}
        <motion.div
          animate={{
            scale: activeStep === id ? 1.12 : 1,
            boxShadow:
              activeStep === id
                ? "0 0 30px rgba(37,99,235,0.8)"
                : "0 0 0px rgba(37,99,235,0)",
          }}
          transition={{
            duration: 0.3,
          }}
          className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 font-bold text-xl transition-all duration-300
          ${
            activeStep >= id
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-blue-200 text-blue-600"
          }`}
        >
          {step}
          {activeStep === id && (
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-400"
            animate={{
              scale: [1, 1.5],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="flex-1 rounded-3xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            
            {/* Icon */}
            <motion.div 
            whileHover={{ rotate:8,scale: 1.1 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <Icon className="text-3xl text-blue-600" />
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {title}
              </h3>

              <p className="mt-2 max-w-xl leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          </div>

          {/* Arrow */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <HiOutlineArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;