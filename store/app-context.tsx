"use client";
import React, { createContext, useState } from "react";

interface AppContextValue {
  menuButton: {
    hidden: boolean;
    setHidden: (hidden: boolean) => void;
  };
}

const initialContextValue: AppContextValue = {
  menuButton: {
    hidden: false,
    setHidden: () => undefined,
  },
};

const AppContext = createContext<AppContextValue>(initialContextValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuButtonHidden, setMenuButtonHidden] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        menuButton: {
          hidden: menuButtonHidden,
          setHidden: setMenuButtonHidden,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
