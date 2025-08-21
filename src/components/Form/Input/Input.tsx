import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  name: string;
  label?: string;
  testId?: string;
  required?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  value?: string | number;
  onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  label,
  testId,
  required,
  type,
  value,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputType = type && !showPassword ? type : "text";

  return (
    <div className="flex-1">
      {label && (
        <div className="text-start px-2">
          <label>{label}</label>
        </div>
      )}
      <div className="block relative m-1">
        <input
          name={name}
          data-testid={testId}
          type={inputType}
          required={required}
          className={`border-1 border-solid rounded-lg px-2 py-1 w-full ${
            type === "password" && "pr-8"
          }`}
          defaultValue={value}
          onChange={(e) => onChange?.(e) ?? {}}
        />
        {type === "password" && (
          <button
            onClick={() => setShowPassword((prevState) => !prevState)}
            className="absolute top-2.5 right-2 flex"
            data-testid={`${testId}-btn`}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        )}
      </div>
    </div>
  );
};
