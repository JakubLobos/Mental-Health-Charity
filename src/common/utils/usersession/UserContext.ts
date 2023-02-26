import React, { createContext, useContext, useState } from "react";


const UserContext = createContext({
  user: null,
});

export function useUser() {
  return useContext(UserContext);
}