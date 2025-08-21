import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Card = ({ title, className, children }: CardProps) => {
  return (
    <div
      className={`${className} m-auto text-center bg-white p-5 rounded-lg shadow-lg`}
      data-testid="card"
    >
      <span className="text-2xl font-bold font-mono" data-testid="card-title">
        {title}
      </span>
      {children}
    </div>
  );
};
