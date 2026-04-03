import { supabase } from "../../../utils/supabase/client";
import { useState } from "react";

export function useLogin(){
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    async function loginWithEmailPassword( email, password ) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });
        setUser(data.user)

        if (error){
          console.log(error);
          setErrorMessage(error.message);
        }else{
          setErrorMessage("");
        }
    }
    
    return { user, errorMessage, loginWithEmailPassword };
}