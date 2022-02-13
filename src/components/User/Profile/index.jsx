import { useSelector } from "react-redux";
import { selectUser } from "../UserSlice";

export const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name {user.name.firstName}</p>
      <p>Surname {user.name.surName}</p>
    </div>
  );
};
