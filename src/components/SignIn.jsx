import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value, "Signed In!"))
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <label htmlFor="email"></label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name="email"
        placeholder="Enter Email"
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="password"
        placeholder="Enter Password"
      />
      <button onClick={handleSubmit}>Sign In</button>
    </>
  );
};
