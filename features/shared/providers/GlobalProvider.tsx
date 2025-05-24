import { createContext, useContext, useState } from "react";

type GlobalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
