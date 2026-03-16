import { createClient } from "../../../utils/supabase/client";
import { useState } from "react";

const supabase = createClient()

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
          setErrorMessage(errorMessage.message);
        }else{
          setErrorMessage("");
        }
    }
    
    return { user, errorMessage, loginWithEmailPassword };
}