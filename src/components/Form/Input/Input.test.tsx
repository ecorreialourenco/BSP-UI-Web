import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Input } from ".";

describe("Input", () => {
  it("When input type is text", () => {
    const { getByTestId } = render(<Input name="Input" testId="test-input" />);

    const input = getByTestId("test-input");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "some text" } });

    expect((input as HTMLInputElement).value).toBe("some text");
  });

  it("When input type is password", () => {
    const { getByTestId } = render(
      <Input name="Input" type="password" testId="test-input" />
    );

    const input = getByTestId("test-input") as HTMLInputElement;
    expect(input).toBeInTheDocument();

    expect(input.type).toBe("password");

    fireEvent.change(input, { target: { value: "some text" } });
    expect((input as HTMLInputElement).value).toBe("some text");

    fireEvent.click(getByTestId("test-input-btn"));
    expect(input.type).toBe("text");

    fireEvent.click(getByTestId("test-input-btn"));
    expect(input.type).toBe("password");
  });

  it("When input onChange event are triggered", () => {
    const onChangeMocked = jest.fn();

    const { getByTestId } = render(
      <Input
        name="Input"
        type="password"
        testId="test-input"
        onChange={onChangeMocked}
      />
    );

    const input = getByTestId("test-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "some text" } });

    expect(onChangeMocked).toHaveBeenCalledTimes(1);
    expect(onChangeMocked).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "some text",
        }),
      })
    );
  });
});
