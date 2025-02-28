import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { languageNames } from '../languageData';
import { ProgrammingLanguagesType } from '../components/Guesses';

type LanguageContextType = {
  languages: ProgrammingLanguagesType[];
  setLanguages: Dispatch<SetStateAction<ProgrammingLanguagesType[]>>;
}

type LanguageProviderProps = {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [languages, setLanguages] = useState<ProgrammingLanguagesType[]>(languageNames);
  
  return (
    <LanguageContext.Provider value={{ languages, setLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}