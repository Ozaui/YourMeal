export interface UserType {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  diet: string;
  allergens: string[];
  dislike: string[];
}

export interface UserState {
  user: UserType | null;
  status: "idle" | "loading" | "succeded" | "failed";
  error: string | null;
}
