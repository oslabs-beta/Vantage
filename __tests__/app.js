/**
 * @jest-environment jsdom
 */

import React from "react";
import { Provider } from "react-redux";
import store from "../client/store/store";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  prettyDOM,
} from "@testing-library/react";
import App from "../client/App.jsx";
import "@testing-library/jest-dom";
import regeneratorRuntime from "regenerator-runtime";

describe("React-Redux integration tests", () => {
  describe("Empty state before interactions", () => {
    let app;
    beforeEach(async () => {
      process.env.NODE_ENV = "development";
      app = await render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    test("App is rendering", () => {
      // const circle = metric.container.querySelector('circle')
      expect(app.getByText("Vantage")).toBeInTheDocument();
      expect(app.getAllByText("Performance")[0]).toBeInTheDocument();
      expect(app.getAllByText("SEO")[0]).toBeInTheDocument();
      expect(app.getAllByText("Best Practices")[0]).toBeInTheDocument();
      expect(app.getAllByText("Accessibility")[0]).toBeInTheDocument();
    });

    describe("Clicking on each metric shows suggestions", () => {
      beforeEach(() => {
        //Close suggestions
        const curEndpoint = app.getByText("Current Endpoint:");
        fireEvent.click(curEndpoint);
      });

      test("Performance", () => {
        let descContainer = app.container.querySelector(
          "#description-container"
        );
        expect(descContainer.firstChild).toBeNull();
        const metric = app.getAllByText("Performance")[0];
        fireEvent.click(metric);
        expect(descContainer.firstChild).not.toBe(null);
      });

      test("SEO", () => {
        let descContainer = app.container.querySelector(
          "#description-container"
        );
        expect(descContainer.firstChild).toBeNull();
        const metric = app.getAllByText("SEO")[0];
        fireEvent.click(metric);
        expect(descContainer.firstChild).not.toBe(null);
      });

      test("Best Practices", () => {
        let descContainer = app.container.querySelector(
          "#description-container"
        );
        expect(descContainer.firstChild).toBeNull();
        const metric = app.getAllByText("Best Practices")[0];
        fireEvent.click(metric);
        expect(descContainer.firstChild).not.toBe(null);
      });

      test("Accessibility", () => {
        let descContainer = app.container.querySelector(
          "#description-container"
        );
        expect(descContainer.firstChild).toBeNull();
        const metric = app.getAllByText("Accessibility")[0];
        fireEvent.click(metric);
        expect(descContainer.firstChild).not.toBe(null);
      });
    });

    describe("Checking performance web vitals", () => {
      beforeEach(() => {
        //Close suggestions
        const curEndpoint = app.getByText("Current Endpoint:");
        fireEvent.click(curEndpoint);
      });

      test("Clicking performance Metric shows web vitals", () => {
        const perf = app.getAllByText("Performance")[0];
        fireEvent.click(perf);
        const webVitalArr = ["FCP", "SI", "LCP", "TTI", "TBT", "CLS"];
        webVitalArr.forEach((cur) => {
          expect(app.getByText(cur)).toBeInTheDocument();
        });
      });
    });
  });

  // describe('Adding markets', () => {
  //   let app;
  //   beforeEach(async () => {
  //     app = await render(
  //       <Provider store={store}>
  //         <App />
  //       </Provider>,
  //     );
  //   });
  //   // TODO: Test the following:
  //   // 1. MarketCreator can successfully add new Markets to the page
  //   // 2. Adding a new market updates the count in TotalsDisplay

  //   test('MarketCreator adds new Markets', () => {
  //     expect(app.queryByText('Location:')).toBeNull();
  //     userEvent.type(app.getByRole('textbox'), 'NY');
  //     userEvent.click(app.getByRole('button', { name: 'Add Market' }), 'NY');
  //     expect(app.getByText('Location:').nextSibling).toHaveTextContent('NY');
  //   });

  //   test('Displays updated with correct count', () => {
  //     expect(app.getByText('Total Markets:').nextSibling).toHaveTextContent(1);
  //     userEvent.type(screen.getByRole('textbox'), 'NY');
  //     userEvent.click(screen.getByRole('button', { name: 'Add Market' }), 'Boston');
  //     expect(app.getByText('Total Markets:').nextSibling).toHaveTextContent(2);
  //   });
  // });
});
