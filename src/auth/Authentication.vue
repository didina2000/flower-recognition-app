<template>
  <div>
    <button v-if="!user" @click="openSignInModal">Sign In</button>
    <button v-if="!user" @click="openJoinModal">Join</button>
    <button v-else @click="signOut">Sign Out</button>
    <p v-if="user">Welcome, {{ user.displayName }}</p>

    <auth-modal
      v-if="showModal"
      :is-sign-in="isSignIn"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
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
