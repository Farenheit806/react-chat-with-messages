import { NavLink } from "react-router-dom";

import "./style.scss";

export const Navbar = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <nav className="nav">
      <div className="nav__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <button onClick={handleClick}>Sign in</button>
    </nav>
  );
};
