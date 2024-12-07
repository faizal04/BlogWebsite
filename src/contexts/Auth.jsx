import { useActionState, useContext } from "react";
import { createContext, useReducer, useState } from "react";

const Authcontext = createContext();
const initialstate = {
  user: null,
  isauthorised: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isauthorised: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        isauthorised: false,
        user: null,
      };
  }
}
function Auth({ children }) {
  const [{ user, isauthorised }, dispatch] = useReducer(reducer, initialstate);

  const FAKE_USER = {
    name: "Faisal",
    email: "faisalharray@gmail.com",
    password: "190204",
    // avatar: "https://i.pravatar.cc/100?u=zz",
  };

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <Authcontext.Provider value={{ isauthorised, user, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
}
function useAuth() {
  const context = useContext(Authcontext);
  if (context === undefined) throw new Error("unknow login attempt");
  return context;
}

export { Auth, useAuth };
