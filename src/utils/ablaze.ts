import { supabase } from "../lib/supabase";

export async function getAblazeEvents() {
  const { data, error } = await supabase
    .from("ablaze_events")
    .select("*")
    .eq("published", true)
    .order("year", { ascending: false });

  if (error) {
    console.error("Error fetching Ablaze events:", error);
    throw error;
  }

  return data;
}

export async function getAblazeEvent(year) {
  const { data, error } = await supabase
    .from("ablaze_events")
    .select("*")
    .eq("year", year)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching Ablaze event:", error);
    throw error;
  }

  return data;
}
