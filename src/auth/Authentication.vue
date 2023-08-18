<template>
  <div>
    <div v-if="!user">
      <button @click="openSignInModal" class="button button-signin">Sign In</button>
      <span class="button-space"></span>
      <button @click="openJoinModal" class="button button-join">Sign up</button>
    </div>
    <div v-else>
      <div class="user-info">
        <p class="welcome-message" v-if="user">{{ welcomeMessage }}</p>
        <button @click="signOut" class="button button-signout">Sign Out</button>
      </div>
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
  computed: {
    welcomeMessage() {
      return `Welcome, ${this.user.displayName || this.user.email}`;
    },
  },
  methods: {
    async initUser() {
      try {
        const user = auth.currentUser;
        this.user = user;

        if (this.user) {
          localStorage.setItem('authenticated', 'true');
        } else {
          localStorage.removeItem('authenticated');
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    },
    methods: {
  async signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      this.user = userCredential.user;
      this.saveLatestResults(); 
      this.closeModal();
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  },
  async join() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      this.user = userCredential.user;
      this.email = '';
      this.password = '';
      this.saveLatestResults(); 
      this.closeModal();
    } catch (error) {
      console.error('Join Error:', error);
    }
  },
  async saveLatestResults() {
    if (this.user) {
      const latestResultsRef = firestore.collection('latestResults').doc(this.user.uid);
      await latestResultsRef.set({
        results: this.latestResults,
      });
    }
  },
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

    if (localStorage.getItem('authenticated')) {
      this.user = auth.currentUser;
    }
  },
};
</script>
