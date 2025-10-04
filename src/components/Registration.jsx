import { useData } from "../context/DataContext"; // 👈 Import useData

const Registration = () => {
  const { data, loading, error } = useData(); // 👈 Get data from context

  if (loading || error) {
    // Show a simplified placeholder during load or on error
    return (
      <section
        id="registration"
        className="py-20 bg-primary dark:bg-dark-bg bg-pattern text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 font-lora">
            Register for the Conference
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            {loading
              ? "Loading registration options..."
              : "Could not load options."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registration"
      className="py-20 bg-primary dark:bg-dark-bg bg-pattern text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 font-lora">
          Register for the Conference
        </h2>
        <p className="text-lg mb-10 text-gray-300">
          Join leading experts and researchers. Secure your spot today!
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* 👇 Use data.registration from the context */}
          {data.registration.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-lg border transition-transform duration-300 ${
                tier.isFeatured
                  ? "border-2 border-accent transform md:scale-110 shadow-2xl z-10"
                  : "border-white/20"
              }`}
            >
              <h3 className="text-2xl font-bold text-accent mb-2 font-lora">
                {tier.tier}
              </h3>
              <p className="text-4xl font-bold mb-4">{tier.price}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className={`w-full font-bold py-3 px-6 rounded-lg transition ${
                  tier.isFeatured
                    ? "bg-accent hover:bg-yellow-600 text-purple-900"
                    : "bg-secondary hover:bg-red-700 text-white"
                }`}
              >
                Register as {tier.tier.split("/")[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registration;
