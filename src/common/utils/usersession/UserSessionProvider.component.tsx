import { createContext, FC, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../pages/api/firebase/firebase";

export interface UserContextType {
    userSession: any;
}

interface UserContextProviderProps {
    children: React.ReactNode,
}

const UserContext = createContext<UserContextType>({
    userSession: null,
});

export const useUser = () => useContext(UserContext);

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  const userSession = user ? { userSession: user } : { userSession: null };

  return (
    <UserContext.Provider value={userSession}>
      {children}
    </UserContext.Provider>
  );
};