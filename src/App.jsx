import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Guest/Home";
import { About } from "./components/Guest/About";
import Navbar from "./components/Navbar";
import { Profile } from "./components/Profile";
import PrivateOutlet from "./components/Router/PrivateOulet";
import PublicOutlet from "./components/Router/PublicOutlet";

export const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/profile" element={<PrivateOutlet />}>
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
