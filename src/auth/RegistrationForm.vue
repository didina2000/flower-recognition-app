<template>
    <div>
      <h2>Create an Account</h2>
      <form @submit.prevent="registerUser">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async registerUser() {
        try {
          const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
          console.log('User registered:', userCredential.user);
        } catch (error) {
          console.error('Registration Error:', error);
        }
      },
    },
  };
  </script>
  