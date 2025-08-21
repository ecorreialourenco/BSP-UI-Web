import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("When click on button", () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(
      <Button label="button" testId="test-btn" onClick={clickHandler} />
    );
    const btn = getByTestId("test-btn");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(clickHandler).toHaveBeenCalled();
  });

  it("When button are disabled", () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(
      <Button
        label="button"
        testId="test-btn"
        disabled
        onClick={clickHandler}
      />
    );

    const btn = getByTestId("test-btn");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(clickHandler).not.toHaveBeenCalled();
  });
});
