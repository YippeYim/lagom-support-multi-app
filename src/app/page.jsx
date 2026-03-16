'use client'
import { useLogin } from "@/components/auth/useLogin";
import { useState } from "react";

export function LoginPage() {
  const [ selectedEmail, setSelectedEmail ] = useState();

  const { user, errorMessage, loginWithEmailPassword} = useLogin();
  const handleLogin = async () => {
    loginWithEmailPassword(selectedEmail, "12345");
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
    </div>

    <button onClick={handleLogin}>Sign in</button>      
    <h1>{user?.id}{errorMessage}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <LoginPage/>
  );
}
