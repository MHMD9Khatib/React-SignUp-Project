import zxcvbn from "zxcvbn";
import React from "react";

const PasswordStrength = ({ password }) => {
  const evaluation = zxcvbn(password);
  const num = evaluation.score;
  console.log(evaluation);

  const createPassLabel = () => {
    switch (num) {
      case 0:
        return "Very week";
      case 1:
        return "week";
      case 2:
        return "Fear";
      case 3:
        return "good";
      case 4:
        return "string";
      default:
        return "none";
    }
  };
  const errMssg = () => {
    switch (num) {
      case 0:
        return "Min 8 characters";
      case 1:
        return "Min 8 characters";
      case 2:
        return "Average";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "none";
    }
  };

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
      <span className="errormssg">
        Password Strength
        <div>
          <svg
            className="svg"
            width="21"
            height="10"
            style={{ textAlign: "right" }}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 8.33337C6.83516 8.33337 6.67405 8.38225 6.53701 8.47382C6.39997 8.56538 6.29316 8.69553 6.23008 8.84781C6.16701 9.00008 6.15051 9.16763 6.18266 9.32928C6.21482 9.49093 6.29418 9.63942 6.41073 9.75596C6.52727 9.87251 6.67576 9.95187 6.83741 9.98403C6.99906 10.0162 7.16661 9.99968 7.31889 9.93661C7.47116 9.87353 7.60131 9.76672 7.69287 9.62968C7.78444 9.49264 7.83332 9.33153 7.83332 9.16671C7.83332 8.94569 7.74552 8.73373 7.58924 8.57745C7.43296 8.42117 7.221 8.33337 6.99998 8.33337ZM6.99998 7.33337C7.17679 7.33337 7.34636 7.26314 7.47139 7.13811C7.59641 7.01309 7.66665 6.84352 7.66665 6.66671V4.66671C7.66665 4.4899 7.59641 4.32033 7.47139 4.1953C7.34636 4.07028 7.17679 4.00004 6.99998 4.00004C6.82317 4.00004 6.6536 4.07028 6.52858 4.1953C6.40355 4.32033 6.33332 4.4899 6.33332 4.66671V6.66671C6.33332 6.84352 6.40355 7.01309 6.52858 7.13811C6.6536 7.26314 6.82317 7.33337 6.99998 7.33337ZM6.99998 0.333374C5.68144 0.333374 4.39251 0.724367 3.29618 1.45691C2.19985 2.18945 1.34537 3.23064 0.840786 4.44882C0.336202 5.66699 0.204179 7.00744 0.461414 8.30064C0.718649 9.59385 1.35359 10.7817 2.28594 11.7141C3.21829 12.6464 4.40617 13.2814 5.69938 13.5386C6.99259 13.7958 8.33303 13.6638 9.55121 13.1592C10.7694 12.6547 11.8106 11.8002 12.5431 10.7038C13.2757 9.60751 13.6666 8.31858 13.6666 7.00004C13.6647 5.23253 12.9617 3.53796 11.7119 2.28814C10.4621 1.03832 8.7675 0.335315 6.99998 0.333374ZM6.99998 12.3334C5.94515 12.3334 4.914 12.0206 4.03694 11.4345C3.15988 10.8485 2.47629 10.0156 2.07263 9.04102C1.66896 8.06648 1.56334 6.99412 1.76913 5.95956C1.97492 4.92499 2.48287 3.97468 3.22875 3.2288C3.97463 2.48292 4.92494 1.97497 5.9595 1.76919C6.99407 1.5634 8.06642 1.66902 9.04096 2.07268C10.0155 2.47635 10.8485 3.15994 11.4345 4.037C12.0205 4.91406 12.3333 5.94521 12.3333 7.00004C12.3316 8.41399 11.7691 9.76952 10.7693 10.7693C9.76946 11.7691 8.41393 12.3316 6.99998 12.3334Z"
              fill={funProgress(num)}
            />
          </svg>
          {errMssg()}
        </div>
      </span>
    </>
  );
};

export default PasswordStrength;
