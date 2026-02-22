'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

/**
 * Initiates anonymous sign-in and returns the promise.
 * The calling function is responsible for handling success and error states.
 */
export function initiateAnonymousSignIn(authInstance: Auth): Promise<UserCredential> {
  return signInAnonymously(authInstance);
}

/**
 * Initiates email/password sign-up and returns the promise.
 * The calling function is responsible for handling success and error states.
 */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): Promise<UserCredential> {
  return createUserWithEmailAndPassword(authInstance, email, password);
}

/**
 * Initiates email/password sign-in and returns the promise.
 * The calling function is responsible for handling success and error states.
 */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(authInstance, email, password);
}
