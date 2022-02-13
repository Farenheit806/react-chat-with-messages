import { set } from "firebase/database";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logIn, signUp, userRef } from "../../../../service/firebase";
import {
  selectUser,
  setFirstName,
  setSurName,
  setUserEmail,
} from "../../../User/UserSlice";
import { setIsAuthed } from "../SignSlice";

export const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const changeForm = () => {
    setIsSignUp(!isSignUp);
  };

  const setUser = () => {
    set(userRef(user.id), user);
  };

  const handleSign = async (event) => {
    event.preventDefault();
    try {
      if (isSignUp) {
        await signUp(user.email, pass);
        setUser();
      } else {
        await logIn(user.email, pass);
      }
      dispatch(setIsAuthed());
    } catch (error) {
      setError(error.message);
    }
  };

  const onChangeEmail = (event) => {
    dispatch(setUserEmail(event.target.value));
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };
  const onChangeFirstName = (event) => {
    dispatch(setFirstName(event.target.value));
  };
  const onChangeSurName = (event) => {
    dispatch(setSurName(event.target.value));
  };

  return (
    <form onSubmit={handleSign}>
      <label htmlFor="email">{isSignUp ? "Sign Up" : "Sign In"}</label>
      {isSignUp && (
        <div className="name">
          <input
            className="name-input"
            type="text"
            name="name"
            placeholder="Name"
            value={user.name.firstName}
            onChange={onChangeFirstName}
          />
          <input
            className="name-input"
            type="text"
            name="surName"
            placeholder="Surname"
            value={user.name.surName}
            onChange={onChangeSurName}
          />
        </div>
      )}
      <input
        className="basic-input"
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={onChangeEmail}
      />
      <input
        className="basic-input"
        type="password"
        placeholder="Password"
        value={pass}
        onChange={onChangePass}
      />
      <input
        className="submit-btn"
        type="submit"
        value={isSignUp ? "Sign Up" : "Sign In"}
      />
      {error && <p>{error}</p>}
      <p>
        or
        <span onClick={changeForm}>
          {isSignUp ? " log in" : " create new account"}
        </span>
      </p>
    </form>
  );
};
