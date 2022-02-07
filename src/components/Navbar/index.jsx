import { useSelector } from "react-redux";
import { selectIsAuthed } from "../Guest/Sign/SignSlice";
import Button from "./Button";
import { GuestList } from "./Lists/GuestList";
import { UserList } from "./Lists/UserList";

import "./style.scss";

const Navbar = () => {
  const isAuthed = useSelector(selectIsAuthed);
  return (
    <header className="header">
      {isAuthed ? <UserList /> : <GuestList />}
      <Button />
    </header>
  );
};

export default Navbar;
