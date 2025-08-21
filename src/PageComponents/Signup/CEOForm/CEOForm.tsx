import { Button, ErrorMessage, Input } from "@/components";
import React, { SyntheticEvent, useState } from "react";

export interface CEOFormModel {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
  userName: FormDataEntryValue;
  password: FormDataEntryValue;
}

interface CEOFormProps {
  data: CEOFormModel;
  setData: (value: CEOFormModel) => void;
  setCurrentStep: (value: (prevState: number) => number) => void;
}

export const CEOForm = ({ data, setData, setCurrentStep }: CEOFormProps) => {
  console.log("🚀 ~ CEOForm ~ data:", data)
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData?.get("password") || "";
    const retryPassword = formData?.get("retryPassword");

    if (!password || password !== retryPassword) {
      setError(true);
    } else {
      setError(false);

      const firstName = formData?.get("firstName") || "";
      const lastName = formData.get("lastName") || "";
      const userName = formData.get("username") || "";

      setData({
        firstName,
        lastName,
        userName,
        password,
      });

      setCurrentStep((prevState: number) => prevState + 1);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full">
          <Input
            name="firstName"
            label="First Name"
            testId="username"
            value={data?.firstName as string}
            required
          />
          <Input
            name="lastName"
            label="Last Name"
            testId="username"
            value={data?.firstName as string}
            required
          />
        </div>
        <div className="w-full">
          <Input
            name="username"
            label="Username"
            testId="username"
            value={data?.firstName as string}
            required
          />
        </div>
        <div className="flex w-full">
          <Input
            name="password"
            label="Password"
            type="password"
            testId="password"
            value={data?.firstName as string}
            required
          />
          <div className="mt-6 flex-1">
            <Input
              name="retryPassword"
              type="password"
              testId="retryPassword"
              value={data?.firstName as string}
              required
            />
          </div>
        </div>
        {error && (
          <ErrorMessage
            testId="error-message"
            message={"Password's doesn't match"}
          />
        )}
        <div className="flex justify-between">
          <Button label="Prev" theme="secondary" disabled />
          <Button label="Next" theme="secondary" type="submit" />
        </div>
      </form>
    </div>
  );
};
