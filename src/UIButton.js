import classes from "./UIButton.module.scss";
const UIButton = ({ children, type, onClick}) => {
  return (
    <div
    onClick={onClick}
      className={
        type === "string"
          ? classes["UIButton"] + " " + classes["string"]
          : classes["UIButton"] + " " + classes["outline"]
      }
    >
      {" "}
      {children}
    </div>
  );
};

export default UIButton;
