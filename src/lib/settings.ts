import type { UserState } from "../store";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const DEFAULT_PROFILE: UserState = {
  name: "Student",
  xp: 0,
  coins: 0,
  level: 1,
  streak: 0,
  lastStudyDate: null,
  focusScore: 0,
  achievements: [],
  favorites: [],
  bookmarks: [],
  notes: [],
  goals: [],
  sessions: [],
  heatmap: {},
  subjectProgress: {},
  dailyGoals: [],
  events: [],
  preferences: {
    theme: "brabus-black",
    accent: "#00d4ff",
    effectMode: "particle",
    font: "Inter",
    pomodoroWork: 25,
    pomodoroBreak: 5,
    notifications: true,
    soundEnabled: true,
  },
};
export async function getSettings() {
  const user = auth.currentUser;

  if (!user) return null;

  const docRef = doc(db, "settings", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
  console.log("🆕 Creating new Firestore profile...");

  await setDoc(docRef, DEFAULT_PROFILE);

  return {
    data: DEFAULT_PROFILE,
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