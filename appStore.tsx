import create from "zustand";

const useGameStore = create((set) => ({
    wins: 0,
    updateWins: (key: any) => set({ wins: key }),
    showRules: false,
    setShowRules: (key: any) => set({ showRules: key }),
}));

export default useGameStore;
