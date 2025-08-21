import React from "react";

interface ErrorMessageProps {
  message: string;
  testId?: string;
}

export const ErrorMessage = ({ message, testId }: ErrorMessageProps) => (
  <span className="text-sm text-red-500" data-testid={testId}>
    {message}
  </span>
);
