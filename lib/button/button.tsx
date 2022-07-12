import React, { ButtonHTMLAttributes, FunctionComponent } from "react";
import classes from "../helpers/classes";

import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "important" | "danger" | "normal";
}
const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  disabled,
  buttonType = "normal",
  ...restProps
}) => (
  <button
    className={classes(
      "wheels-button",
      `wheels-button-${buttonType}`,
      disabled ? `wheels-button-disabled` : "",
      className
    )}
    {...restProps}
  >
    {children}
  </button>
);

export default Button;
