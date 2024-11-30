import { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  AuthError
} from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthResponse {
  success: boolean;
  error?: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthError = (error: AuthError): string => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/user-disabled':
        return 'This account has been disabled';
      case 'auth/user-not-found':
        return 'No account found with this email';
      case 'auth/wrong-password':
        return 'Incorrect password';
      case 'auth/email-already-in-use':
        return 'Email already in use';
      case 'auth/weak-password':
        return 'Password is too weak';
      case 'auth/operation-not-allowed':
        return 'Operation not allowed';
      case 'auth/network-request-failed':
        return 'Network error. Please try again';
      default:
        return 'An error occurred. Please try again';
    }
  };

  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      const error = err as AuthError;
      const errorMessage = handleAuthError(error);
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      setLoading(true);
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      const error = err as AuthError;
      const errorMessage = handleAuthError(error);
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    signIn,
    signUp,
    loading,
    error,
  };
};