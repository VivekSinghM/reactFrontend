import React, { createContext, useEffect, useState } from "react";

export const Auth = createContext();

const AuthProvider = (props) => {
  //check auth
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setToken(token);
    setAuth(true);
    // const data=JSON.stringify(token)
    localStorage.setItem("auth", token);
  };

  const logout = () => {
    setToken("");
    setAuth(false);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('auth'))
    if (!!localStorage.getItem("auth")) {
      setToken(localStorage.getItem("auth"));
      setAuth(true);
    }
  }, []);
  return (
    <Auth.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </Auth.Provider>
  );
};
export default AuthProvider;
