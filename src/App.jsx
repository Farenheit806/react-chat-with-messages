import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Guest/Home";
import { About } from "./components/Guest/About";
import Navbar from "./components/Navbar";
import { Profile } from "./components/User/Profile";
import PrivateOutlet from "./components/Router/PrivateOulet";
import PublicOutlet from "./components/Router/PublicOutlet";
import Chat from "./components/User/Chat";
import Notes from "./components/User/Notes";
import Wall from "./components/User/Wall";

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
        <Route path="/chat" element={<PrivateOutlet />}>
          <Route path="" element={<Chat />} />
        </Route>
        <Route path="/notes" element={<PrivateOutlet />}>
          <Route path="" element={<Notes />} />
        </Route>
        <Route path="/wall" element={<PrivateOutlet />}>
          <Route path="" element={<Wall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
