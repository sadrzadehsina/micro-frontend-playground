import { create } from "zustand";

export const useTheme = create((set) => ({
  theme: "dark",
  setTheme: (theme) => set((state) => ({ ...state, theme })),
}));
