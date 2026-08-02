import { supabase } from "../lib/supabase";

export const getPublishedArticles = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }

  return data;
};
// slug
export const getArticleBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    throw error;
  }

  return data;
};
