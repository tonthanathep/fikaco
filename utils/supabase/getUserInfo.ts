"use server";
import { createClient } from "./server";

export const getUserInfo = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
  }
  return data;
};
