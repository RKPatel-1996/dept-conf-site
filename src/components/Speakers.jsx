import React from "react";
// Import our new custom hook
import { useData } from "../context/DataContext";

const Speakers = () => {
  // 1. Consume the data from the context
  const { data, loading, error } = useData();

  // 2. Handle the loading state
  if (loading) {
    return (
      <section
        id="speakers"
        className="py-20 bg-slate-100 dark:bg-dark-surface"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 font-lora">
            Resource Persons
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Loading speakers...
          </p>
        </div>
      </section>
    );
  }

  // 3. Handle any errors during fetching
  if (error) {
    return (
      <section id="speakers" className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-700 dark:text-red-200 mb-12 font-lora">
            Error
          </h2>
          <p className="text-red-600 dark:text-red-300">
            Failed to load speaker data. Please check your connection or try
            again later.
          </p>
        </div>
      </section>
    );
  }

  // 4. Render the component with the fetched data
  // Note: We are now mapping over `data.speakers`
  return (
    <section id="speakers" className="py-20 bg-slate-100 dark:bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          Resource Persons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={speaker.imageUrl}
                alt={`Photo of ${speaker.name}`}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-slate-200 dark:border-gray-700"
              />
              <h3 className="text-xl font-bold text-secondary">
                {speaker.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {speaker.affiliation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
