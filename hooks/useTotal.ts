import { create } from "zustand";

const useTotal = create((set) => ({
    amount: 0,
}))

export default useTotal;