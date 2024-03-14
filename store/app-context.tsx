import React, { createContext, useState } from "react";

interface AppContextValue {}

const initialContextValue: AppContextValue = {};

const AppContext = createContext<AppContextValue>(initialContextValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AppContextValue>(initialContextValue);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
