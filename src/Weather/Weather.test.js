import React from "react";
import { render, fireEvent, within, wait } from "@testing-library/react";

import Weather from "./Weather";
import * as Requests from "../api";

import createMockWeather from "../api/mockWeather";

describe("Weather component", () => {
  it("shows current weather in Stockholm", async () => {
    jest.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve(
            createMockWeather({
              main: { temp: 5, feels_like: 2 },
              wind: { speed: 1 },
              weather: [{ description: "clouds", icon: "04d" }],
            })
          ),
      });
    });

    const { getByLabelText, findByTestId } = render(<Weather />);
    const citiesSelect = getByLabelText(/City/);

    fireEvent.change(citiesSelect, { target: { value: "Stockholm 🇸🇪" } });
    expect(citiesSelect).toHaveValue("Stockholm 🇸🇪");

    await wait(() => {
      expect(window.fetch).toHaveBeenCalledWith(
        expect.stringContaining("Stockholm")
      );
    });

    const container = await findByTestId("current-weather");
    within(container).getByText(
      /Currently in Stockholm 🇸🇪 it is clouds with 5 degrees. It feels like 2 degrees 🥶 with a wind speed of 1 m\/s/i
    );
  });

  it("shows current weather in Delhi", async () => {
    jest.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve(
            createMockWeather({
              main: { temp: 35, feels_like: 35 },
              wind: { speed: 3 },
              weather: [{ description: "light rain", icon: "50n" }],
            })
          ),
      });
    });

    const { getByLabelText, findByTestId } = render(<Weather />);
    const citiesSelect = getByLabelText("City");

    fireEvent.change(citiesSelect, { target: { value: "Delhi 🇮🇳" } });

    await wait(() => {
      expect(window.fetch).toHaveBeenCalledWith(
        expect.stringContaining("Delhi")
      );
    });

    const container = await findByTestId("current-weather");

    within(container).getByText(
      /Currently in Delhi 🇮🇳 it is light rain with 35 degrees. It feels like 35 degrees 🥵 with a wind speed of 3 m\/s/i
    );
  });
});
