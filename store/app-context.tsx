"use client";
import React, { createContext, useState } from "react";

interface AppContextValue {
  menu: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    buttonHidden: boolean;
    setButtonHidden: (hidden: boolean) => void;
    buttonTheme: "LIGHT" | "DARK";
    setButtonTheme: (theme: "LIGHT" | "DARK") => void;
  };
}

const initialContextValue: AppContextValue = {
  menu: {
    isOpen: false,
    setIsOpen: () => undefined,
    buttonHidden: false,
    setButtonHidden: () => undefined,
    buttonTheme: "LIGHT",
    setButtonTheme: () => undefined,
  },
};

const AppContext = createContext<AppContextValue>(initialContextValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuButtonHidden, setMenuButtonHidden] = useState<boolean>(true);
  const [menuButtonTheme, setMenuButtonTheme] = useState<"LIGHT" | "DARK">("DARK");

  return (
    <AppContext.Provider
      value={{
        menu: {
          isOpen: menuIsOpen,
          setIsOpen: setMenuIsOpen,
          buttonHidden: menuButtonHidden,
          setButtonHidden: setMenuButtonHidden,
          buttonTheme: menuButtonTheme,
          setButtonTheme: setMenuButtonTheme,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
