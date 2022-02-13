import { useSelector } from "react-redux";
import { selectIsShown } from "./SignSlice";
import { Form } from "./Form";
import "./style.scss";

export const Sign = () => {
  const isShown = useSelector(selectIsShown);
  return (
    isShown && (
      <div className="sign-modal">
        <Form />
      </div>
    )
  );
};
