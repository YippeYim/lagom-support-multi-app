
import { supabase } from "../../../utils/supabase/client";

export const useStorage = ()=>{
  const getTable = async (setNote) => {
    "check valid"

    const { data, error } = await supabase
      .from('notes')
      .select('*')

    try {
        setNote(data);
        console.log(data);
        console.log(user?.id);
    }
    catch {
        console.log(error);
    }
  }
  
  const getProfile = async () =>{
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .single();
    return profile
  }
    
  return { getTable:getTable, getProfile:getProfile }
}
