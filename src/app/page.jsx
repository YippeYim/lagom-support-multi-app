'use client'
import { useLogin } from "@/components/auth/useLogin";
import { useState } from "react";
import { supabase } from "../../utils/supabase/client";

import { ProfileButton } from "@/components/auth/Profile";
import { useStorage } from "@/components/storage/useStorage";

export function LoginPage() {
  const [ selectedEmail, setSelectedEmail ] = useState();
  const [ note , setNote ] = useState([]);

  const { user, errorMessage, loginWithEmailPassword} = useLogin();
  const { getTable, getProfile } = useStorage();
  const handleLogin = async () => {
    const password = process.env.NEXT_PUBLIC_USERPASSWORD;
    await loginWithEmailPassword(selectedEmail, password);
    
    // const profile = await getProfile();
    // console.log(profile);
  }



  return (
    <div>
    <div>
      <ProfileButton
        label = "Oil"
        email = "admin@gmail.com"
        selectedEmail= {selectedEmail}
        setSelectedEmail= {setSelectedEmail}
        user = {user}
      />
      <ProfileButton
        label = "Notto"
        email = "boysupport@gmail.com"
        selectedEmail= {selectedEmail}
        setSelectedEmail= {setSelectedEmail}
        user = {user}
      />
      <ProfileButton
        label = "Noey"
        email = "boy@gmail.com"
        selectedEmail= {selectedEmail}
        setSelectedEmail= {setSelectedEmail}
        user = {user}
      />
    </div>

    <button onClick={handleLogin}>Sign in</button><br/>
    <button onClick={()=>getTable(setNote)}>get</button>      
    <h1>{user?.id}{errorMessage}</h1>
    
    {note.map((col=>(
      <p key={col.id}>{col.title}</p>
    )))}
    </div>
  );
}

export default function Home() {
  return (
    <LoginPage/>
  );
}
