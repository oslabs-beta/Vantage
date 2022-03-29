/**
 * @jest-environment jsdom
 */

import React from "react";
import { Provider } from "react-redux";
import store from "../client/store/store";
import { render, fireEvent } from "@testing-library/react";
import App from "../client/App.jsx";
import "@testing-library/jest-dom";
import regeneratorRuntime from "regenerator-runtime";

describe("React-Redux integration tests", () => {
  describe("Render app before each test", () => {
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

    describe("Performance web vitals", () => {
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

      test("Clicking on each web vital shows it in the legend", () => {
        const perf = app.getAllByText("Performance")[0];
        fireEvent.click(perf);
        const webVitalArr = ["FCP", "SI", "LCP", "TTI", "TBT", "CLS"];
        webVitalArr.forEach((cur) => {
          const webVitalMetric = app.getByText(cur);
          fireEvent.click(webVitalMetric);
          expect(app.getAllByText(cur)[0]).toBeInTheDocument();
          fireEvent.click(webVitalMetric);
        });
      });

      test("Clicking on each web vital shows a line for it individually", () => {
        const perf = app.getAllByText("Performance")[0];
        fireEvent.click(perf);
        const webVitalArr = ["FCP", "SI", "LCP", "TTI", "TBT", "CLS"];
        webVitalArr.forEach((cur) => {
          const webVitalMetric = app.getByText(cur);
          fireEvent.click(webVitalMetric);
          const webVitalLine = app.container.querySelectorAll(".recharts-line");
          expect(webVitalLine.length).toBe(1);
          fireEvent.click(webVitalMetric);
        });
      });

      test("Clicking on each web vital shows it's unit on the graph", () => {
        const perf = app.getAllByText("Performance")[0];
        fireEvent.click(perf);
        const webVitalArr = ["FCP", "SI", "LCP", "TTI", "TBT"];
        webVitalArr.forEach((cur, i) => {
          const webVitalMetric = app.getByText(cur);
          fireEvent.click(webVitalMetric);
          const unit = app
            .getAllByText("ms")
            .filter(({ nodeName }) => nodeName === "tspan");
          expect(unit[0]).toBeInTheDocument();
          fireEvent.click(webVitalMetric);
        });
      });

      test("Clicking on each web vital shows a line for it together", () => {
        const perf = app.getAllByText("Performance")[0];
        fireEvent.click(perf);
        const webVitalArr = ["FCP", "SI", "LCP", "TTI", "TBT", "CLS"];
        webVitalArr.forEach((cur, i) => {
          const webVitalMetric = app.getByText(cur);
          fireEvent.click(webVitalMetric);
          const webVitalLine = app.container.querySelectorAll(".recharts-line");
          expect(webVitalLine.length).toBe(i + 1);
        });
      });
    });

    describe("Chart range switch", () => {
      let switchContainer;
      beforeEach(() => {
        const metric = app.getAllByText("Performance")[0];
        fireEvent.click(metric);
        switchContainer = app.container.querySelector("#range-switch");
      });

      test("Switch is in document", () => {
        expect(switchContainer).toBeInTheDocument();
      });

      test("selectorSwitch in store starts as false", () => {
        expect(store.getState().currentView.selectorSwitch).toBe(false);
      });

      test("selectorSwitch in to be true after range switch is clicked", () => {
        fireEvent.click(app.container.querySelector("#range-switch-click"));
        expect(store.getState().currentView.selectorSwitch).toBe(true);
      });
    });

    describe("Suggestions", () => {
      const metricArr = [];
      beforeEach(() => {
        metricArr[0] = app.getAllByText("Performance")[0];
        metricArr[1] = app.getAllByText("Accessibility")[0];
        metricArr[2] = app.getAllByText("Best Practices")[0];
        metricArr[3] = app.getAllByText("SEO")[0];
      });

      test("Each Suggestion has two paragraphs and a button", () => {
        metricArr.forEach((metric) => {
          fireEvent.click(metric);
          const suggestions = app.container.querySelectorAll(".suggestion");
          suggestions.forEach((cur) => {
            expect(cur).toBeInTheDocument();
            expect(cur.children[0].nodeName).toBe("P");
            expect(cur.children[1].nodeName).toBe("P");
            expect(cur.lastChild.nodeName).toBe("BUTTON");
          });
        });
      });

      test("Each suggestion description has text", () => {
        metricArr.forEach((metric) => {
          fireEvent.click(metric);
          const suggestions = app.container.querySelectorAll(".suggestion");
          suggestions.forEach((cur) => {
            expect(cur.children[0].innerHTML).toBeTruthy();
          });
        });
      });

      test("Each suggestion has a valid value", () => {
        metricArr.forEach((metric) => {
          fireEvent.click(metric);
          const suggestions = app.container.querySelectorAll(".suggestion");
          suggestions.forEach((cur) => {
            const num = Number(cur.children[1].innerHTML);
            if (isNaN(num)) {
              expect(isNaN(cur.children[1].firstChild.nodeValue)).toBe(false);
              expect(cur.children[1].children[0].innerHTML).toMatch(
                /ms|B|elements|s|KiB|Kelements/
              );
            } else {
              expect(num).toBeLessThanOrEqual(100);
              expect(num).toBeGreaterThanOrEqual(0);
            }
          });
        });
      });
    });
  });
});
