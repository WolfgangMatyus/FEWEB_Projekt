import { defineStore } from "pinia";

// Create a new store instance.
export const useUserStore = defineStore("user", {
  state() {
    return {
      email: "",
      username: "",
      token: "",
    };
  },
  getters: {
    isLoggedIn() {
      return this.email !== "" && this.username !== "";
    },
  },
  actions: {
    changeMail() {
      this.email = this.token;
    },
    async user() {
      try {
        const apiUrl = "/api/users";
        const accessToken = localStorage.getItem('access_token');
    
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        //const firstRow = data.user[0];
        const usersArray = data._embedded.users;
        //console.log(data);
        console.log(usersArray);
        const firstUser = usersArray[0];
        console.log(firstUser);

        this.email = firstUser.email;
        this.username = firstUser.username;
        
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
    
    async login() {
      try {
        const apiUrl = "/api/auth/token";
    
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: 'robert',
            password: '123',
          }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        const { token } = data;
    
        // Store the JWT token in the state
        this.token = token;
        localStorage.setItem('access_token', this.token);
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
    async update() {
      try {
        const apiUrl = "/api/user/31000000-0000-0000-0000-000000000000";
    
        const response = await fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: 'bull',
            email: 'bull@bull.com',
            password: '123',
          }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }    
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    }
  },
});
