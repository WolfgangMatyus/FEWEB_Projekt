// store/auth.js
/*import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authToken: null,
  }),
  actions: {
    async login(email, password) {
      try {
        // Replace with the actual authentication API endpoint
        const apiUrl = 'http://localhost:8080/auth/token';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error('Authentication failed');
        }

        const data = await response.json();

        // Assuming the API response includes a JWT token
        const { token } = data;

        // Store the JWT token in the state
        this.authToken = token;

        // You may also want to save the token in a secure cookie or localStorage for persistence
        // Example using localStorage: localStorage.setItem('authToken', token);

        return token;
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
    },
  },
});
*/