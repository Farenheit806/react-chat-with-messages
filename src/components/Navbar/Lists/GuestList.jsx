import { NavLink } from "react-router-dom";

export const GuestList = () => (
  <nav className="header__nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
);
