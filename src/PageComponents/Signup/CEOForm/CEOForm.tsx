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
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Input
            name="firstName"
            label="First Name"
            testId="username"
            className="w-full"
            value={data?.firstName as string}
            required
          />
          <Input
            name="lastName"
            label="Last Name"
            testId="username"
            className="w-full"
            value={data?.lastName as string}
            required
          />

          <Input
            name="username"
            label="Username"
            testId="username"
            className="w-full md:col-span-2"
            value={data?.userName as string}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            testId="password"
            className="w-full"
            value={data?.password as string}
            required
          />
          <div className="mt-6 flex-1 w-full">
            <Input
              name="retryPassword"
              type="password"
              testId="retryPassword"
              value={data?.password as string}
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
