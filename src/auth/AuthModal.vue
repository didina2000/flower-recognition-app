<template>
    <div>
      <h2>{{ isSignIn ? 'Sign In' : 'Create an Account' }}</h2>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">{{ isSignIn ? 'Sign In' : 'Register' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  
  export default {
    props: {
      isSignIn: Boolean,
    },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleSubmit() {
        if (this.isSignIn) {
          try {
            const userCredential = await auth.signInWithEmailAndPassword(this.email, this.password);
            console.log('User signed in:', userCredential.user);
            this.$emit('close');
          } catch (error) {
            console.error('Sign In Error:', error);
          }
        } else {
          try {
            const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
            console.log('User registered:', userCredential.user);
            this.$emit('close');
          } catch (error) {
            console.error('Registration Error:', error);
          }
        }
      },
    },
  };
  </script>
  