import { useState } from "react";
import { useData } from "../context/DataContext"; // 👈 Import useData

const Abstracts = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const { data, loading, error } = useData(); // 👈 Get data from context

  const handleToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  if (loading) {
    return (
      <section id="abstracts" className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 font-lora">
            Browse Abstracts
          </h2>
          <p>Loading abstracts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="abstracts" className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-700 dark:text-red-200 mb-12 font-lora">
            Error
          </h2>
          <p>Could not load abstracts.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="abstracts" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          Browse Abstracts
        </h2>
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* 👇 Use data.abstracts from the context */}
          {data.abstracts.map((theme) => (
            <div
              key={theme.themeId}
              className="border dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => handleToggle(theme.themeId)}
                className="w-full flex justify-between items-center p-4 bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold text-primary dark:text-gray-200 text-left">
                  {theme.themeTitle}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform text-primary dark:text-gray-200 ${
                    openAccordion === theme.themeId ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`p-4 bg-white dark:bg-gray-800 space-y-4 ${
                  openAccordion === theme.themeId ? "block" : "hidden"
                }`}
              >
                {theme.abstracts.length > 0 ? (
                  theme.abstracts.map((abstract) => (
                    <div
                      key={abstract.id}
                      className="border-l-4 border-secondary pl-4 py-2"
                    >
                      <h4 className="font-bold text-red-800 dark:text-red-400">
                        {abstract.title}
                      </h4>
                      <p className="text-sm text-gray-500 italic">
                        {abstract.authors}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {abstract.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">
                    Abstracts for this theme will be available soon.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abstracts;
