import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Login } from "./Login";

const mockRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: (route: string) => mockRouter(route) }),
}));

describe("Login", () => {
  it("When try to login with wrong credentials", () => {
    const { getByTestId } = render(<Login />);

    fireEvent.change(getByTestId("username"), {
      target: { value: "some text" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "some text" },
    });

    fireEvent.click(getByTestId("submit-bth"));

    expect(getByTestId("error-message").innerHTML).toBe(
      "Username or password doesn't match"
    );
  });

  it("When try to login with correct credentials", () => {
    const { getByTestId } = render(<Login />);

    fireEvent.change(getByTestId("username"), {
      target: { value: "demo" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "123" },
    });

    fireEvent.click(getByTestId("submit-bth"));

    expect(mockRouter).toHaveBeenCalledWith("/");
  });
});
