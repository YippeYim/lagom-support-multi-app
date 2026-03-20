'use client'
import { useLogin } from "@/components/auth/useLogin";
import { useState } from "react";
import { createClient } from "../../utils/supabase/client";

const supabase = createClient();

export function LoginPage() {
  const [ selectedEmail, setSelectedEmail ] = useState();
  const [ note , setNote ] = useState([]);

  const { user, errorMessage, loginWithEmailPassword} = useLogin();
  const handleLogin = async () => {
    await loginWithEmailPassword(selectedEmail, "12345");
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .single();
    console.log("Your Role in DB is:", profile?.role);
  }

  const getTable = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')

    setNote(data);
    console.log(data);
    console.log(user?.id);
  }

  return (
    <div>
    <div>
      <button
        className={`p-2 rounded border border-white-100 ${selectedEmail === "admin@gmail.com" ? 'bg-blue-100' : ''}`}
        onClick={()=>setSelectedEmail("admin@gmail.com")}
      >Admin</button>

      <button
        className={`p-2 rounded border border-white-100 ${selectedEmail === "ggmail@gmail.com" ? 'bg-blue-100' : ''}`}
        onClick={()=>setSelectedEmail("ggmail@gmail.com")}
      >ggmail</button>
      <button
        className={`p-2 rounded border border-white-100 ${selectedEmail === "ggmail@gmail.com" ? 'bg-blue-100' : ''}`}
        onClick={()=>setSelectedEmail("boy@gmail.com")}
      >boy no sup</button>
      <button
        className={`p-2 rounded border border-white-100 ${selectedEmail === "ggmail@gmail.com" ? 'bg-blue-100' : ''}`}
        onClick={()=>setSelectedEmail("boysupport@gmail.com")}
      >boy sup</button>
    </div>

    <button onClick={handleLogin}>Sign in</button><br/>
    <button onClick={getTable}>get</button>      
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
