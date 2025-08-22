import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { StepItem } from "./StepItem";

export interface StepItemModel {
  idx: number;
  title: string;
  isDisabled?: boolean;
}

interface StepperProps {
  items: StepItemModel[];
  children: (
    val: number,
    setVal: Dispatch<SetStateAction<number>>
  ) => ReactNode;
}

export const Stepper = ({ items, children }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div>
      <ol className="flex flex-wrap">
        {items.map((item) => (
          <StepItem
            key={item.idx}
            title={item.title}
            idx={item.idx}
            isActive={currentStep + 1 === item.idx}
          />
        ))}
      </ol>
      <div>{children(currentStep, setCurrentStep)}</div>
    </div>
  );
};
