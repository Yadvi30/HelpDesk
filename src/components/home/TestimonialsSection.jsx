import { motion } from "framer-motion";
import { useEffect } from "react";
import  { testimonials }  from "../../data/testimonials";
import TestimonialCard from "../TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-slate">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Trusted by homes and businesses for reliable IT solutions and
            exceptional customer support.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">

          <div>
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">1200+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-2">Customer Satisfaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">24×7</h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

        </div>

      </div>

      {/* Marquee */}

      <div className="relative overflow-hidden">

  {/* Left Fade */}
  <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />

  {/* Right Fade */}
  <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

  <div className="marquee gap-8 py-4">
    {[...testimonials, ...testimonials].map((item, index) => (
      <TestimonialCard
        key={index}
        image={item.image}
        name={item.name}
        role={item.role}
        review={item.review}
        rating={item.rating}
      />
    ))}
  </div>

</div>

    </section>
  );
};

export default TestimonialsSection;