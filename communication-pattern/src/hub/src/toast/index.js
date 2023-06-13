import { create } from "zustand";

export const useToast = create((set) => ({
  toast: {},
  showToast: (toast) => set((state) => ({ ...state, toast })),
}));
