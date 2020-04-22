/* eslint-disable */

import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { createHistory } from "@reach/router";
import { reducer } from "../state";

export function renderWithProviders(
  ui,
  {
    initialState = {},
    store = createStore(reducer, initialState),
    history = createHistory(),
    pattern,
  } = {}
) {
  const ProviderWrappedUI = () => (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider>
          <Router history={history}>
            <Route path={pattern}>{ui}</Route>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
  return { ...render(<ProviderWrappedUI />), store, history };
}
