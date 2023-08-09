import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYAzsRL9xlDCdhvgG71lQT_fKCfdYjKPk",
  authDomain: "flower-recognition-app.firebaseapp.com",
  projectId: "flower-recognition-app",
  storageBucket: "flower-recognition-app.appspot.com",
  messagingSenderId: "3784747480",
  appId: "1:3784747480:web:f6e624406d11e437732aad",
  measurementId: "G-L6MNRS6KEV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };