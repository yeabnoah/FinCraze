import { create } from "zustand";

// Define City interface
interface City {
  name: string;
}

// Define UserState interface
interface UserState {
  city: City;
  setCity: (cityName: string) => void; // Change the argument type to string
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Define the Zustand store
const useCityStore = create<UserState>((set) => ({
  city: { name: "" },
  setCity: (cityName) =>
    set((state) => ({ city: { ...state.city, name: cityName } })), // Update the city name
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useCityStore;
