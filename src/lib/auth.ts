import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut as firebaseSignOut,
} from "firebase/auth";

import { auth } from "./firebase";

export async function signUp(name: string, email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("✅ Account created");

    await updateProfile(userCredential.user, {
      displayName: name,
    });
    console.log("✅ Profile updated");

    try {
  await sendEmailVerification(userCredential.user);
  console.log("📧 Verification email sent");
} catch (e) {
  console.error("❌ Verification failed:", e);
}

    await firebaseSignOut(auth);
    console.log("👋 Signed out");

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
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as Error };
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