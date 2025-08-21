import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Stepper } from ".";

describe("Stepper", () => {
  const items = [{ title: "Step 1" }, { title: "Step 2" }];
  beforeEach(() => {
    render(
      <Stepper items={items}>
        {(currentStep, setCurrentStep) => {
          switch (currentStep) {
            case 0:
              return (
                <div>
                  <button
                    data-testid="nextButton"
                    onClick={() => setCurrentStep((prevState) => prevState + 1)}
                  >
                    Next
                  </button>
                </div>
              );

            default:
              return (
                <div>
                  <button
                    data-testid="prevButton"
                    onClick={() => setCurrentStep((prevState) => prevState - 1)}
                  >
                    Previous
                  </button>
                </div>
              );
          }
        }}
      </Stepper>
    );
  });

  it("When render all steps", () => {
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeDefined();
    });

    expect(screen.getByTestId("nextButton")).toBeDefined();
  });

  it("When click on next button", () => {
    const nextButton = screen.getByTestId("nextButton");
    fireEvent.click(nextButton);

    expect(screen.getByTestId("prevButton")).toBeDefined();
  });
});
