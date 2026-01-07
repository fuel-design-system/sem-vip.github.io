import * as React from "react";
import styles from "./input.module.scss";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    const classes = [
      styles.input,
      error && styles['input-error'],
      className
    ].filter(Boolean).join(" ");

    return (
      <input
        type={type}
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
