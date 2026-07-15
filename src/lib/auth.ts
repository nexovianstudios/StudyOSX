import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut as firebaseSignOut,
  reload,
} from "firebase/auth";

import { auth } from "./firebase";

export async function signUp(
  name: string,
  email: string,
  password: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    try {
      await sendEmailVerification(userCredential.user);
    } catch (e) {
      console.error("❌ Verification failed:", e);
    }

    await firebaseSignOut(auth);

    return {
      user: userCredential.user,
      error: null,
    };
  } catch (error) {
    console.error("❌ Signup failed:", error);

    return {
      user: null,
      error: error as Error,
    };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Refresh user data from Firebase
    await reload(userCredential.user);

    // Block unverified users
    if (!userCredential.user.emailVerified) {
      await firebaseSignOut(auth);

      return {
        user: null,
        error: new Error(
          "Please verify your email before logging in.\n\nCheck your Spam/Junk folder if you don't see the email."
        ),
      };
    }

    return {
      user: userCredential.user,
      error: null,
    };
  } catch (error) {
    return {
      user: null,
      error: error as Error,
    };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}

export async function getCurrentUser() {
  return auth.currentUser;
}