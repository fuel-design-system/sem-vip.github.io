import * as React from "react";
import styles from "./textarea.module.scss";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const classes = [
      styles.textarea,
      error && styles['textarea-error'],
      className
    ].filter(Boolean).join(" ");

    return (
      <textarea
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
