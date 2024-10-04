import React from "react";
import s from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  className,
  style,
  children,
}) => {
  const classNames = `${s.button} ${s[variant]} ${className || ""}`;

  return (
    <button className={classNames} style={style}>
      {children}
    </button>
  );
};
