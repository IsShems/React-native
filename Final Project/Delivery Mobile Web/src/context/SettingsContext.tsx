import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Settings {
  email: string;
  cardDetails: {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvc: string;
  };
  deliveryAddress: string;
  nonContactDelivery: boolean;
}

interface SettingsContextProps {
  children: ReactNode;
}


  
const SettingsContext = createContext<{
  settings: Settings | null;
  setSettings: React.Dispatch<React.SetStateAction<Settings | null>>;
}>({ settings: null, setSettings: () => {} });

export const SettingsProvider: React.FC<SettingsContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings | null>(null);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
