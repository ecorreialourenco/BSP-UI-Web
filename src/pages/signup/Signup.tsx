import { Card, StepItemModel, Stepper } from "@/components";
import {
  CEOForm,
  CEOFormModel,
  CompanyForm,
  CompanyFormModel,
  OfficeForm,
  OfficeFormModel,
} from "@/PageComponents";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SignupData {
  ceo: CEOFormModel;
  company: CompanyFormModel;
  office: OfficeFormModel;
}

const initialData: SignupData = {
  ceo: {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  },
  company: {
    companyName: "",
  },
  office: {
    officeName: "",
    address: "",
  },
};

export const Signup = () => {
  const [formData, setFormData] = useState<SignupData>(initialData);
  const router = useRouter();

  const steps: StepItemModel[] = [
    { idx: 1, title: "CEO" },
    { idx: 2, title: "Company" },
    { idx: 3, title: "Office" },
  ];

  const handleSetData = (
    origin: string,
    data: CEOFormModel | CompanyFormModel | OfficeFormModel
  ) => {
    setFormData((prevState) => ({ ...prevState, [origin]: data }));
  };

  const handleSubmit = (
    origin: string,
    data: CEOFormModel | CompanyFormModel | OfficeFormModel
  ) => {
    setFormData((prevState) => ({ ...prevState, [origin]: data }));

    const fullData = { ...formData, office: data };
    console.log("🚀 ~ handleSubmit ~ fullData:", fullData);

    router.push("/");
  };

  return (
    <div className="flex h-dvh w-dvw">
      <Card title="Sign Up" className="w-75 sm:w-100 md:w-150">
        <Stepper items={steps}>
          {(currentStep, setCurrentStep) => {
            switch (currentStep) {
              case 0:
                return (
                  <CEOForm
                    data={formData.ceo}
                    setData={(value) => handleSetData("ceo", value)}
                    setCurrentStep={setCurrentStep}
                  />
                );
              case 1:
                return (
                  <CompanyForm
                    data={formData.company}
                    setData={(value) => handleSetData("company", value)}
                    setCurrentStep={setCurrentStep}
                  />
                );
              case 2:
                return (
                  <OfficeForm
                    data={formData.office}
                    setData={(value) => handleSubmit("office", value)}
                    setCurrentStep={setCurrentStep}
                  />
                );
              default:
                return <div />;
            }
          }}
        </Stepper>
      </Card>
    </div>
  );
};
