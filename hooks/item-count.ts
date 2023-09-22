import { create } from "zustand";

const useCount = create((set) => ({
    amount: 1,
    increase: () => set((state:any) => ({amount: state.amount + 1})),
    decrease: () => set((state:any) => ({amount: state.amount > 1 ? 
    state.amount -1 : state.amount}))
}))

export default useCount;