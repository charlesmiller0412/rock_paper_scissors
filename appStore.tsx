import create from "zustand";

const useGameStore = create((set) => ({
    wins: 0,
    updateWins: (key: any) => set({ wins: key }),
    showRules: false,
    setShowRules: (key: any) => set({ showRules: key }),
    step: 1,
    setStep: (key: any) => set({ aiSelect: key }),
    input: null,
    setInput: (key: any) => set({ input: key }),
    aiSelect: false,
    setAiSelect: (key: any) => set({ aiSelect: key }),
    currentPick: null,
    setCurrentPick: (key: any) => set({ aiSelect: key }),
}));

export default useGameStore;
