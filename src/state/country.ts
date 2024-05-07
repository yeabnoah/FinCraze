import { create } from "zustand";

// Define City interface
interface City {
  _id: string;
  name: string;
}

// Extend Country interface to include cities
interface Country {
  _id: string;
  name: string;
  cities: City[];
}

// Define UserState interface
interface UserState {
  country: Country;
  setCountry: (country: Country) => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Define the Zustand store
const useCountryStore = create<UserState>((set) => ({
  country: {
    _id: "",
    name: "",
    cities: [], // Initialize cities as an empty array
  },
  setCountry: (country) => set({ country }),
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useCountryStore;
