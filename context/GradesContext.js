import { createContext, useContext, useState } from "react";

const GradesContext = createContext();

export const GradesProvider = ({ children }) => {
  const [grades, setGrades] = useState([]);

  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {children}
    </GradesContext.Provider>
  );
};

export const useGrades = () => useContext(GradesContext);
