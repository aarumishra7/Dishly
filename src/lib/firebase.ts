import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../config/firebase.config';

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);