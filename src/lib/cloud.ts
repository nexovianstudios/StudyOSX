import { getSettings, saveSettings } from "./settings";
import type { UserState } from "../store";

export async function loadUserProfile(): Promise<Partial<UserState> | null> {
  const result = await getSettings();
  return result?.data ?? null;
}

export async function saveUserProfile(
  profile: Partial<UserState>
) {
  return await saveSettings(profile);
}

export async function updateUserProfile(
  updates: Partial<UserState>
) {
  return await saveSettings(updates);
}