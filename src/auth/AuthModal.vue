<template>
    <div class="modal">
      <div class="modal-content auth-modal">
        <h2>{{ isSignIn ? 'Sign In' : 'Create an Account' }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" class="auth-input" required />
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" class="auth-input" required />
          </div>
  
          <div class="button-container">
            <button class="auth-button auth-button-action" type="submit">{{ isSignIn ? 'Sign In' : 'Join' }}</button>
          </div>
        </form>
        <div class="button-container">
          <button @click="toggleMode" class="auth-button auth-button-toggle">
            {{ isSignIn ? 'Join' : 'Sign In' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
  
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
      closeModal() {
        this.$emit('close');
      },
      async handleSubmit() {
        if (this.isSignIn) {
          try {
            const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
            console.log('User signed in:', userCredential.user);
            this.closeModal();
          } catch (error) {
            console.error('Sign In Error:', error);
          }
        } else {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            console.log('User registered:', userCredential.user);
            this.closeModal();
          } catch (error) {
            console.error('Registration Error:', error);
          }
        }
      },
      toggleMode() {
        this.$emit('close');
        this.$emit('toggle-mode');
      },
    },
  };
  </script>
