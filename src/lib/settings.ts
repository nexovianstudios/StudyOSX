import { supabase } from "./supabase";

export async function getSettings() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .eq("user_id", user.id)
    .single();

  return { data, error };
}

export async function saveSettings(settings: Record<string, unknown>) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  return await supabase.from("settings").upsert({
    user_id: user.id,
    ...settings,
  });
}