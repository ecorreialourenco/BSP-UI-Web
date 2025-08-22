import { Button, Input } from "@/components";
import React, { SyntheticEvent } from "react";

export interface OfficeFormModel {
  officeName: FormDataEntryValue;
  address: FormDataEntryValue;
}

interface OfficeFormProps {
  data: OfficeFormModel;
  setData: (value: OfficeFormModel) => void;
  setCurrentStep: (value: (prevState: number) => number) => void;
}

export const OfficeForm = ({
  data,
  setData,
  setCurrentStep,
}: OfficeFormProps) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const officeName = formData.get("officeName") || "";
    const address = formData.get("address") || "";

    setData({ officeName, address });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <Input
            name="officeName"
            label="Name"
            testId="officeName"
            className="w-full sm:col-span-3"
            value={data?.officeName as string}
            required
          />
          <Input
            name="address"
            label="Address"
            testId="address"
            className="w-full sm:col-span-3"
            value={data?.address as string}
            required
          />

          <Input
            name="zipCode"
            label="Zip Code"
            testId="zipCode"
            className="w-full"
            value={data?.address as string}
            required
          />
          <Input
            name="country"
            label="Country"
            testId="country"
            className="w-full sm:col-span-2"
            value={data?.address as string}
            required
          />
        </div>
        <div className="flex justify-between">
          <Button
            label="Prev"
            theme="secondary"
            onClick={() => setCurrentStep((prevState: number) => prevState - 1)}
          />
          <Button label="Finish" type="submit" />
        </div>
      </form>
    </div>
  );
};
