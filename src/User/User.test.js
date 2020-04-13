import React from "react";
import { render, fireEvent } from "@testing-library/react";
import User from "./User";

describe("User component", () => {
  it("shows name in greeting header", () => {
    const { getByText } = render(<User name="John" />);
    const header = getByText("Greetings John!");
    expect(header).toBeInTheDocument();
  });

  it("shows no name if none is passed in greeting header", () => {
    const { queryByText, debug } = render(<User />);
    debug();
    expect(queryByText("John")).not.toBeInTheDocument();
    expect(queryByText("Greetings !")).toBeInTheDocument();
  });

  it("sets a name when typing", () => {
    const { getByLabelText } = render(<User />);
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "John" } });
    expect(input.value).toBe("John");
  });
});
