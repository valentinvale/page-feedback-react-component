import type { ComponentPropsWithoutRef } from "react";
import "../styles/FixedButton.css";

type FixedButtonProps = {
  icon: string;
  iconAlt: string;
  text: string;
} & ComponentPropsWithoutRef<"button">;

export default function FixedButton({
  icon,
  iconAlt,
  text,
  onClick,
  disabled,
  children,
  className,
  ...rest
}: FixedButtonProps) {
  return (
    <button
      className={`fixed-button ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <img src={icon} alt={iconAlt} />
      <p>{text}</p>
      {children}
    </button>
  );
}
