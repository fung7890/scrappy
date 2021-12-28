import React, { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      signup(emailRef.current.value, passwordRef.current.value);
    }
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Password:
          <input type="text" name="password" ref={passwordRef} />
        </label>
        <label>
          Password Confirmation:
          <input type="text" name="password_confirm" />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
