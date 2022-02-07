import { useSelector } from "react-redux";
import { selectIsAuthed } from "../../Guest/Sign/SignSlice";
import { Outlet, Navigate } from "react-router-dom";
import Sign from "../../Guest/Sign";

const PublicOutlet = () => {
  const isAuthed = useSelector(selectIsAuthed);

  return !isAuthed ? (
    <main>
      <Outlet />
      <Sign />
    </main>
  ) : (
    <Navigate to="/profile" replace />
  );
};

export default PublicOutlet;
