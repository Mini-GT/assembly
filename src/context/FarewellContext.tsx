import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type FarewellTextContextType = {
  farewellText: string | undefined;
  setFarewellText: Dispatch<SetStateAction<string | undefined>>;
}

type FarewellTextProviderProps = {
  children: ReactNode;
}

const FarewellTextContext = createContext<FarewellTextContextType | undefined>(undefined);

export function FarewellTextProvider({ children }: FarewellTextProviderProps) {
  const [farewellText, setFarewellText] = useState<string | undefined>(undefined);
   
  return (
    <FarewellTextContext.Provider value={{ farewellText, setFarewellText }}>
      {children}
    </FarewellTextContext.Provider>
  );
}

export function useFarewellText() {
  const context = useContext(FarewellTextContext);

  if (context === undefined) {
    throw new Error('useFarewellText must be used within a FarewellText provider');
  }
  
  return context;
}