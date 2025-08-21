import { Button, Card, ErrorMessage, Input } from "@/components";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

export const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("username");
    const password = formData.get("password");

    if (userName === "demo" && password === "123") {
      router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-dvh w-dvw">
      <Card title="Sign In" className="w-75">
        <form onSubmit={handleSubmit}>
          <Input name="username" testId="username" required />
          <Input name="password" type="password" testId="password" required />
          <Button label="Login" testId="submit-bth" type="submit" />
          {error && (
            <ErrorMessage
              testId="error-message"
              message={"Username or password doesn't match"}
            />
          )}
        </form>
      </Card>
    </div>
  );
};
