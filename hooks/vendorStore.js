import { create } from "zustand";

export const useVendorStore = create((set) => ({
  individualData: null,
  setIndividualData: (data) => set({ individualData: data }),
}));
