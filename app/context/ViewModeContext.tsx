"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "design" | "code";

interface ViewModeContextType {
  mode: ViewMode;
  toggleMode: () => void;
  setMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ViewMode>("design");

  const toggleMode = () => {
    setMode((prev) => (prev === "design" ? "code" : "design"));
  };

  return (
    <ViewModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

// Named export here matches `import { useViewMode }`
export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
};