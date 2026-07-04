import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function getSettings() {
  const user = auth.currentUser;

  if (!user) return null;

  const docRef = doc(db, "settings", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    return { data: null, error: null };
  }

  return {
    data: snap.data(),
    error: null,
  };
}

export async function saveSettings(settings: Record<string, unknown>) {
  const user = auth.currentUser;

  if (!user) return;

  const docRef = doc(db, "settings", user.uid);

  await setDoc(
    docRef,
    {
      ...settings,
    },
    { merge: true }
  );

  return { error: null };
}