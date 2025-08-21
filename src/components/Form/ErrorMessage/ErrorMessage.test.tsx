import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("Input", () => {
  it("When input type is text", () => {
    const message = "Some error";
    const testId = "error-message";
    const { getByTestId } = render(
      <ErrorMessage testId={testId} message={message} />
    );

    expect(getByTestId(testId).innerHTML).toBe(message);
  });
});
