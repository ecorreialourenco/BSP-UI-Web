import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";

const buttonThemes = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-300 text-black hover:bg-gray-400 disabled:bg-gray-200",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost:
    "bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100",
  link: "bg-transparent text-blue-500 hover:text-blue-700",
};

type Theme = keyof typeof buttonThemes;

interface ButtonProps {
  label: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  theme?: Theme;
  testId?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  type = "button",
  theme = "primary",
  testId,
  disabled = false,
  className,
  onClick,
}: ButtonProps) => {
  const themeClasses = buttonThemes[theme];

  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testId}
      disabled={disabled}
      className={cn("rounded-lg px-2 py-1 m-1", themeClasses, className, {
        "cursor-not-allowed": disabled,
        "cursor-pointer": !disabled,
      })}
    >
      {label}
    </button>
  );
};
