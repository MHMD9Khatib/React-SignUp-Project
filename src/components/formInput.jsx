import { useState } from "react";
import "./formInput.css";
import "../passwordStr";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    idType,
    strengthpass,
    onChange,
    mssg,
    span,
    id,
    eye,
    style,
    type,
    ...inputProps
  } = props;
  const [isVisible, setIsVisisble] = useState(false);
  const handleFocused = (e) => {
    setFocused(true);
  };
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="formInput">
      <label>
        {mssg}
        {label}
        {eye}
      </label>

      <input
        id={idType}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
        type={passwordType}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {/* <button style={style}
              className="eye-btn"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <i className="fa fa-eye"></i>
              ) : (
                <i className="fa fa-eye-slash"></i>
              )}
            </button> */}
    </div>
  );
};

export default FormInput;
