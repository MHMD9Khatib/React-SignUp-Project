import zxcvbn from "zxcvbn";
import React from "react";

const PasswordStrength = ({ password }) => {
  const evaluation = zxcvbn(password);
  const num = evaluation.score;
  console.log(evaluation);
  const funProgress = (num) => {
    switch (num) {
      case 0:
        return "#CD3232";
      case 1:
        return "#CD3232";
      case 2:
        return "#FAAD14";
      case 3:
        return "#389E0D";
      case 4:
        return "#389E0D";
      default:
        return "none";
    }
  };

  const divStrength = () => ({
    display: "flex",
    flexDirection: "row",
    width: "227px",
  });
  const boxPass = (x) => ({
    display: "inline-block",
    width: "40.8px",
    height: "4px",
    background: x,
    borderRadius: "999px",
    order: "0",
    flexGrow: "1",

    // marginLeft: '2px'
  });
  const changePasswordColor = () => ({});

  return (
    <>
      <div className="pw-strength" style={divStrength()}>
        {[1, 2, 3, 4, 5].map((el, i) => {
          console.log(num);
          let v = i > num ? 1312313 : num;
          return (
            <div
              key={i}
              className="box-1"
              style={boxPass(funProgress(v))}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default PasswordStrength;
