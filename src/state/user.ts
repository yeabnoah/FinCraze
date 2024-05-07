import { create } from "zustand";

// Define City interface
interface City {
  name: string;
  _id: string;
}

// Define Country interface
interface Country {
  _id: string;
  name: string;
  cities: City[];
}

// Define UserState interface
interface UserState {
  user: {
    _id: string;
    name: string;
    age: number;
    phoneNumber: number;
    email: string;
    role: string;
    username: string;
    password: string;
    transactionFee: number;
    countries: {
      country: Country;
      balance: number;
      _id: string;
    }[];
    allowed: boolean;
  };
  isLoggedIn: boolean;
  setUser: (userData: Partial<UserState["user"]>) => void; // Function to update user data
}

// Define the Zustand store
const useUserStore = create<UserState>((set) => ({
  user: {
    _id: "",
    name: "",
    age: 0,
    phoneNumber: 0,
    email: "",
    role: "sender",
    username: "",
    password: "",
    transactionFee: 0,
    countries: [],
    allowed: true,
  },
  isLoggedIn: true,
  setUser: (userData) =>
    set((state) => ({ user: { ...state.user, ...userData } })),
}));

export default useUserStore;
