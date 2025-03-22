
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * Updates user profile information in Supabase
 */
export const updateUserProfile = async (
  userId: string,
  name: string,
  avatarUrl: string | null,
  bio?: string
): Promise<void> => {
  try {
    // Update Supabase Auth metadata (for name)
    const { error: updateError } = await supabase.auth.updateUser({
      data: { name }
    });
    
    if (updateError) throw updateError;
    
    // Update avatar_url and bio in user_profiles table
    const { error: profileError } = await supabase
      .from('user_profiles')
      .upsert({
        id: userId,
        avatar_url: avatarUrl,
        full_name: name,
        bio: bio
      }, {
        onConflict: 'id'
      });
        
    if (profileError) throw profileError;
    
    toast.success("Profile updated successfully!");
  } catch (error: any) {
    toast.error("Failed to update profile");
    throw error;
  }
};

/**
 * Fetches user's profile from Supabase
 */
export const fetchUserProfile = async (userId: string): Promise<{
  avatarUrl: string | null;
  bio?: string | null;
}> => {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("avatar_url, bio")
      .eq("id", userId)
      .maybeSingle();
        
    if (error) {
      throw error;
    }
    
    return {
      avatarUrl: data?.avatar_url || null,
      bio: data?.bio || null
    };
  } catch (error: any) {
    console.error("Error fetching profile:", error.message);
    return { avatarUrl: null, bio: null };
  }
};

/**
 * Uploads avatar image to Supabase storage
 */
export const uploadAvatar = async (
  userId: string,
  file: File
): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;
    
    // Upload the file - using upsert to overwrite if exists
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        upsert: true,
        cacheControl: '3600'
      });
      
    if (uploadError) {
      throw uploadError;
    }
    
    // Get the public URL
    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);
      
    return data.publicUrl;
  } catch (error: any) {
    console.error("Upload error:", error);
    throw error;
  }
};
