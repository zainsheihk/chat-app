import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBuxcTPLPPdAX298Z59fBBZdDa3wWIJt5A",
  authDomain: "chat-app-184ec.firebaseapp.com",
  projectId: "chat-app-184ec",
  storageBucket: "chat-app-184ec.appspot.com",
  messagingSenderId: "936338005085",
  appId: "1:936338005085:web:75258eec2da7b1151b01b4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
