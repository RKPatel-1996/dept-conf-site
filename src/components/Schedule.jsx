import { useState } from "react"; // 👈 Was missing
import { useData } from "../context/DataContext";

const Schedule = () => {
  // 1. ADDED: useState to manage the active tab, starting with the first one (index 0).
  const [activeTab, setActiveTab] = useState(0);
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <section id="schedule" className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 font-lora">
            Conference Schedule
          </h2>
          <p>Loading content...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="schedule" className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-700 dark:text-red-200 mb-12 font-lora">
            Error
          </h2>
          <p>Could not load content.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          Conference Schedule
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="mb-4 flex justify-center border-b border-gray-200 dark:border-gray-700">
            {/* 2. FIXED: Use data.schedule instead of scheduleData */}
            {data.schedule.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-6 font-semibold text-lg transition-colors duration-300 ${
                  activeTab === index
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-500 hover:text-secondary"
                }`}
              >
                {day.day}: {day.date}
              </button>
            ))}
          </div>

          {/* Schedule Content */}
          <div>
            {/* 2. FIXED: Also use data.schedule here */}
            {data.schedule.map((day, index) => (
              <div
                key={day.day}
                className={activeTab === index ? "block" : "hidden"}
              >
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg flex items-start space-x-4 ${
                        eventIndex % 2 === 0
                          ? "bg-slate-50 dark:bg-dark-surface"
                          : "bg-slate-100 dark:bg-gray-800"
                      }`}
                    >
                      <span className="font-bold text-primary dark:text-accent w-32 shrink-0">
                        {event.time}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
