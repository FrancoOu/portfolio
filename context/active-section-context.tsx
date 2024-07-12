'use client';

import React, { createContext, useState } from 'react'


type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  initialLoad: boolean;
  setInitialLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: {children: React.ReactNode}) {
    const [initialLoad, setInitialLoad] = useState<boolean>(true);
    const [activeSection, setActiveSection] = useState<string>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick, 
      setTimeOfLastClick,
      initialLoad,
      setInitialLoad
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
  }
  return context
}
