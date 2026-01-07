import * as React from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => {
    const variantClass = styles[`variant-${variant}`];
    const sizeClass = styles[`size-${size}`];
    const classes = [styles.button, variantClass, sizeClass, className].filter(Boolean).join(" ");

    return (
      <button
        type={type}
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
