"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";


interface GlobalContextType {
  soundEnable: boolean;
  setSoundEnable:  Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark:  Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<GlobalContextType | null>(null);


interface SoundProps {
  children: ReactNode;
}

const GlobalContextProvider:React.FC<SoundProps> = ({children}) => {

  const [soundEnable, setSoundEnable] = useState<boolean>(true);
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const htmlEl = document.querySelector('html');
    if (htmlEl) {
      htmlEl.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  return (
   <GlobalContext.Provider value={{soundEnable, setSoundEnable, isDark, setIsDark}}>
      {children} 
   </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;