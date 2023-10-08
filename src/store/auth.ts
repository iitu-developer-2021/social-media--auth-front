import { defineStore } from "pinia";

type User = {
  email: string;
  firstName: string;
  isVerfied: boolean;
  lastName: string;
  profileImageUrl: string;
  provider: string;
  providerUserId: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
};

export const useAuth = defineStore("auth", {
  state: (): AuthState => ({ user: null, token: null }),
  actions: {
    initAuth() {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
        
      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user) as User;
      }
    },
  },
});
