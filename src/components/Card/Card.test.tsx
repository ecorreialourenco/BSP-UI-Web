import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Input", () => {
  it("When input type is text", () => {
    const title = "test";
    const { getByTestId } = render(
      <Card title={title}>
        <span>Content</span>
      </Card>
    );

    const cardTitle = getByTestId("card-title");
    expect(cardTitle.innerHTML).toBe(title);
  });
});
