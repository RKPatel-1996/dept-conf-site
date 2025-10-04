import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // The path '/content.json' works because the file is in the 'public' folder,
    // which is served at the root of the domain.
    fetch("/content.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch content:", error);
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this runs only once when the component mounts.

  const value = { data, loading, error };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook to easily consume the context in other components
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
