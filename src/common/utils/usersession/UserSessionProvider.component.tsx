import { createContext, FC, useContext, useState } from "react";

export interface UserContextType {
    userSession: any;
    setUserSession: (user: any) => void;
}

interface UserContextProviderProps {
    children: React.ReactNode,
}

const UserContext = createContext<UserContextType>({
    userSession: null,
    setUserSession: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [userSession, setUserSession] = useState(null);

  return (
    <UserContext.Provider value={{ userSession, setUserSession }}>
      {children}
    </UserContext.Provider>
  );
};