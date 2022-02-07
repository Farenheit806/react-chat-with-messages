import { useState } from "react";
// import { onValue, set } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import { allUsersRef, logIn, signUp, userRef } from "../../../service/firebase";
import { selectIsAuthed, selectIsShown, setIsAuthed } from "./SignSlice";

import "./style.scss";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const isAuthed = useSelector(selectIsAuthed);
  const isShown = useSelector(selectIsShown);
  const dispatch = useDispatch();

  // const setUser = () => {
  //   onValue();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, pass);
      } else {
        await logIn(email, pass);
      }
      setEmail("");
      setPass("");
      dispatch(setIsAuthed());
    } catch (e) {
      setError(e.message);
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };
  const onRelocate = (event) => {
    event.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    isShown && (
      <div className="sign-modal">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={onChangePass}
          />
          <button type="sumbit">{isSignUp ? "Sign up" : "Sign in"}</button>
          <a onClick={onRelocate}>
            or {isSignUp ? "sign in" : "create new account"}
          </a>
          {error && <h4>{error}</h4>}
        </form>
      </div>
    )
  );
};

export default Sign;
