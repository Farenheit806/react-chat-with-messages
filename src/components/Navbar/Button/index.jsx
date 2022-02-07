import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../service/firebase";
import { selectIsShown, setIsShown } from "../../Guest/Sign/SignSlice";
import { selectIsAuthed, setIsAuthed } from "../../Guest/Sign/SignSlice";

const Button = () => {
  const isAuthed = useSelector(selectIsAuthed);
  const isShown = useSelector(selectIsShown);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsShown());
  };
  const onLogOut = () => {
    logOut();
    dispatch(setIsAuthed());
  };
  return isAuthed ? (
    <button onClick={onLogOut}>log out</button>
  ) : (
    <button onClick={handleClick}>Sign in</button>
  );
};
export default Button;
