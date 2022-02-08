import { NavLink } from "react-router-dom";

export const UserList = () => (
  <nav className="header__nav">
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/chat">Chat</NavLink>
    <NavLink to="/wall">Wall</NavLink>
  </nav>
);
