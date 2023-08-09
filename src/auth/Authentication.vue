<template>
  <div>
    <div v-if="!user">
      <button @click="openSignInModal" class="button button-signin">Sign In</button>
      <span class="button-space"></span>
      <button @click="openJoinModal" class="button button-join">Join</button>
    </div>
    <div v-else>
      <button @click="signOut" class="button button-signout">Sign Out</button>
      <p>Welcome, {{ user.displayName }}</p>
    </div>

    <AuthModal v-if="showModal" @close="closeModal" :isSignIn="isSignIn" />

  </div>
</template>

<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import AuthModal from './AuthModal.vue';

export default {
  components: {
    AuthModal,
  },

  data() {
    return {
      user: null,
      showModal: false,
      isSignIn: true,
    };
  },
  methods: {
    async initUser() {
      try {
        const user = auth.currentUser;
        this.user = user;
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    },
    async signIn() {
      try {
        const email = 'testuser@example.com';
        const password = 'testpassword';

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.closeModal();
      } catch (error) {
        console.error('Sign In Error:', error);
      }
    },
    async join() {
      try {
        const email = 'newuser@example.com';
        const password = 'newpassword';

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.closeModal();
      } catch (error) {
        console.error('Join Error:', error);
      }
    },
    async signOut() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error('Sign Out Error:', error);
      }
    },

    toggleAuthMode() {
      this.isSignIn = !this.isSignIn;
      this.showModal = true; 
    },

    openSignInModal() {
      this.isSignIn = true;
      this.showModal = true;
    },
    openJoinModal() {
      this.isSignIn = false;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  mounted() {
    this.initUser();
  },
};
</script>
