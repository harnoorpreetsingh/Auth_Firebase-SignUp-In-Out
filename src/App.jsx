import { useEffect, useState } from "react";
import "./App.css";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/config";
import { SignInWithGoogle } from "./components/SignInWithGoogle";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleaningup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return (
      <>
        <SignUp />
        <br />
        <br />
        <SignIn />
        <br />
        <h1>OR</h1>

        <SignInWithGoogle/>
      </>
    );
  }

  return (
    <>
      <h1>Hi {user.email}!</h1>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </>
  );
}

export default App;
