import { useData } from "../context/DataContext";

const About = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <section id="about" className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 font-lora">
            About The Conference
          </h2>
          <p>Loading content...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-700 dark:text-red-200 mb-12 font-lora">
            Error
          </h2>
          <p>Could not load content.</p>
        </div>
      </section>
    );
  }

  // When data is loaded, map over `data.about`
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          About The Conference
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 👇 This is the corrected line */}
          {data.about.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-dark-surface p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4 font-lora">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
