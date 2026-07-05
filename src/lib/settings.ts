import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function getSettings() {
  const user = auth.currentUser;

  if (!user) return null;

  const docRef = doc(db, "settings", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    return {
      data: null,
      error: null,
    };
  }

  return {
    data: snap.data(),
    error: null,
  };
}

export async function saveSettings(settings: Record<string, unknown>) {
  const user = auth.currentUser;

  if (!user) {
    console.log("❌ No logged in user");
    return;
  }

  console.log("✅ Writing to Firestore for:", user.uid);
  console.log(settings);

  const docRef = doc(db, "settings", user.uid);

  try {
    await setDoc(
      docRef,
      settings,
      { merge: true }
    );

    console.log("✅ Firestore write successful");
  } catch (e) {
    console.error("🔥 Firestore write failed:", e);
  }

  return { error: null };
}