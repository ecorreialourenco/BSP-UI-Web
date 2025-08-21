import React from "react";

interface StepItemProps {
  idx: number;
  title: string;
  isActive?: boolean;
}

export const StepItem = ({ idx, title, isActive = false }: StepItemProps) => {
  return (
    <li className="flex flex-1 flex-col text-center">
      <h3
        className={`m-auto w-10 h-10 border-2 border-gray-200 rounded-4xl pt-1.5 ${
          isActive && "bg-gray-200"
        }`}
      >
        {idx + 1}
      </h3>
      <p className="mt-2">{title}</p>
    </li>
  );
};
