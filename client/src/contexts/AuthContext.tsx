import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

import {
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

type Props = {
  children: JSX.Element;
};

type AuthContextProps = {
  currentUser: FirebaseUser | null;
  signup: (email: string, password: string) => Promise<any>;
};

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  const signup = (email: string, password: string): Promise<any> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextProps = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
