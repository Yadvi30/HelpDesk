import { motion } from "framer-motion";
import { HiStar, HiOutlineChatAlt2 } from "react-icons/hi";

const TestimonialCard = ({ image, name, role, review, rating }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group
           w-[360px]
           bg-white
           rounded-3xl
           p-8
           border border-gray-100
           shadow-lg
           hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
           transition-all
           duration-500
           flex-shrink-0"
    >
      {/* Quote */}
     <motion.div
            whileHover={{
                rotate: 15,
                scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-full bg-blue-100
                        flex items-center justify-center
                        mb-6
                        group-hover:bg-blue-600
                        transition-all duration-300"
            >
            <HiOutlineChatAlt2
                className="text-3xl text-blue-600
                        group-hover:text-white
                        transition-all duration-300"
            />
    </motion.div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(rating)].map((_, index) => (
          <HiStar
            key={index}
            className="text-yellow-400 text-xl"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-7 mb-8">
        "{review}"
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover
                        border-2 border-blue-100
                        group-hover:scale-110
                        transition-transform duration-300"
        />

        <div>
          <h4 className="font-semibold text-lg text-gray-900">
            {name}
          </h4>

          <p className="text-gray-500 text-sm">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;