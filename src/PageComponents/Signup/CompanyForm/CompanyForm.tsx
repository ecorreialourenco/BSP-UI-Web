import { Button, Input } from "@/components";
import React, { SyntheticEvent } from "react";

export interface CompanyFormModel {
  companyName: FormDataEntryValue;
}

interface CompanyFormProps {
  data: CompanyFormModel;
  setData: (value: CompanyFormModel) => void;
  setCurrentStep: (value: (prevState: number) => number) => void;
}

export const CompanyForm = ({
  data,
  setData,
  setCurrentStep,
}: CompanyFormProps) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const companyName = formData.get("companyName") || "";

    setData({ companyName });

    setCurrentStep((prevState: number) => prevState + 1);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full">
          <Input
            name="companyName"
            label="Name"
            testId="companyName"
            value={data?.companyName as string}
            required
          />
        </div>
        <div className="flex justify-between">
          <Button
            label="Prev"
            theme="secondary"
            onClick={() => setCurrentStep((prevState: number) => prevState - 1)}
          />
          <Button label="Next" theme="secondary" type="submit" />
        </div>
      </form>
    </div>
  );
};
