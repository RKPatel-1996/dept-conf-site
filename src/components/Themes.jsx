import { themesData } from "../data/themes";

const Themes = () => {
  return (
    <section
      id="themes"
      className="py-20 bg-slate-100 dark:bg-dark-surface bg-pattern"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-6 font-lora">
          Core Themes
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We invite researchers, academicians, and industry professionals to
          submit abstracts on the following themes. Share your work and
          contribute to the dialogue on a sustainable future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themesData.map((theme) => (
            <div
              key={theme.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-secondary mb-3 font-lora">
                {theme.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
