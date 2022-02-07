import { useSelector } from "react-redux";
import { selectIsAuthed } from "../../Guest/Sign/SignSlice";
import { Outlet, Navigate } from "react-router-dom";

const PrivateOutlet = () => {
  const isAuthed = useSelector(selectIsAuthed);

  return isAuthed ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateOutlet;
