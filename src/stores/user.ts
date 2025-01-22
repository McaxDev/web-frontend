import type {User} from "@/types";
import { defineStore } from "pinia";

export interface UserState {
  user: User | null,
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      user: null,
    }
  }
})
