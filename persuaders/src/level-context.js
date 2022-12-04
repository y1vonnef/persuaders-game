import { createContext, useState } from "react";

const LevelContext = createContext();
export function LevelContextProvider({ children }) {
  const [newLevel, setNewLevel] = useState(true);

  return (
    <LevelContext.Provider
      value={{
        newLevel,
        setNewLevel,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
}

export default LevelContext;
