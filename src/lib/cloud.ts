import { getSettings, saveSettings } from "./settings";

export async function loadUserSettings() {
  const result = await getSettings();

  return result?.data ?? null;
}

export async function updateUserSettings(
  updates: Record<string, unknown>
) {
  return await saveSettings(updates);
}