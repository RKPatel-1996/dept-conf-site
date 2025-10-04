import { useData } from "../context/DataContext";

const Hero = () => {
  const { data, loading, error } = useData();

  // Show a simplified loading state for the hero
  if (loading || error) {
    return (
      <section id="home" className="relative text-white bg-pattern">
        <div className="absolute inset-0 bg-primary opacity-90" />
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-lora leading-tight">
            Loading...
          </h2>
        </div>
      </section>
    );
  }

  const { preTitle, title, subtitle, date, location, ctaButton } = data.hero;

  return (
    <section id="home" className="relative text-white bg-pattern">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-primary opacity-90" />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-lg md:text-xl font-medium text-accent mb-2">
          {preTitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold font-lora leading-tight">
          {title}
        </h2>
        <h3 className="text-2xl md:text-4xl font-lora mt-2">{subtitle}</h3>
        <p className="mt-6 text-xl md:text-2xl font-semibold">{date}</p>
        <p className="mt-2 text-lg text-gray-300">{location}</p>
        <a
          href={ctaButton.href}
          className="mt-8 inline-block bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
        >
          {ctaButton.text}
        </a>
      </div>
    </section>
  );
};

export default Hero;
