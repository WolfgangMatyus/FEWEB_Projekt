import { defineStore } from 'pinia';

// Create a new store instance.
export const useUserStore = defineStore('user', {
  state () {
    return {
      email: '',
    }
  },
  getters: {
    isLoggedIn () {
      return this.email !== '';
    },
  },
  actions: {
    login (payload) {
      this.email = payload.email;
    },
  },
});