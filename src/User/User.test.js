import React from "react";
import { render, fireEvent } from "@testing-library/react";
import User from "./User";

describe("User component", () => {
  it("shows name in greeting header", () => {
    const { getByText } = render(<User name="Daniel" />);
    const header = getByText("Greetings Daniel!");
    expect(header).toBeInTheDocument();
  });

  it("shows name in greeting header in Swedish", () => {
    const { getByTestId } = render(<User name="Daniel" />);
    const header = getByTestId("greeting-message");
    expect(header).toBeInTheDocument();
  });

  it("shows no greeting if no name is passed", () => {
    const { queryByText, debug } = render(<User />);
    debug();
    expect(queryByText("Greetings")).not.toBeInTheDocument();
  });

  it("shows a greeting message when typing", () => {
    const { getByLabelText, getByText } = render(<User />);

    const input = getByLabelText("Name");

    fireEvent.change(input, { target: { value: "Daniel" } });

    const header = getByText("Greetings Daniel!");

    expect(header).toBeInTheDocument();
  });
});
