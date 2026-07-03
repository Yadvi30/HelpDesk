const features = [
  {
    icon: "...",
    title: "Easy Complaint Registration",
    description: "Submit complaints in just a few clicks."
  },
  {
    icon: "...",
    title: "Live Tracking",
    description: "Track your complaint in real time."
  },
  {
    icon: "...",
    title: "Instant Notifications",
    description: "Get updates whenever status changes."
  },
  {
    icon: "...",
    title: "Secure Platform",
    description: "Your information remains safe and protected."
  },
  {
    icon: "...",
    title: "Community Driven",
    description: "Work together to improve your locality."
  },
  {
    icon: "...",
    title: "Transparent Process",
    description: "Monitor every stage of complaint resolution."
  }
];


const FeatureCard = ({ icon, title, description }) => {
  const Icon = icon;

  return (
    <div className="flex flex-col items-start p-8 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 space-y-4">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
        <Icon className="text-3xl text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;