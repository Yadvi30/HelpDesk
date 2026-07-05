import { howItWorks } from "../../data/howItWorks";
import TimelineCard from "../TimelineCard";
import { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
               Get your IT issues resolved in three simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {howItWorks.map((item, index) => (
            <TimelineCard
                key={item.id}
                id={item.id}
                step={item.step}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={index === howItWorks.length - 1}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;