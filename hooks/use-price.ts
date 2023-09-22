import { create } from "zustand";

const usePrice = create((set) => ({
    values: [],
    addValue: (newValue:number) => {
        set((state:any) => ({
          values: [...state.values, newValue],
        }));
      },
}))

export default usePrice;