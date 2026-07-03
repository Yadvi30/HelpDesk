import {features} from "../../data/features";
import FeatureCard from "../FeatureCards";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose HelpDesk?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Smart features designed to simplify complaint registration,
            tracking, and resolution for a better community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;