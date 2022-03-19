/**
 * @jest-environment jsdom
 */

import React from "React";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import regeneratorRuntime from 'regenerator-runtime';

// import App from '../client/App';
import Metric from "../client/components/Metric.jsx";

describe("Unit testing React components", () => {
  describe("Metric basic", () => {
    let metric;
    let handleClick;

    beforeEach(() => {
      handleClick = jest.fn()
      const props = { name: "name", value: 80, handleClick};
      metric = render(<Metric {...props} />);
      // console.log(text);
    });

    test("Metric name and value appear on screen", () => {
      expect(metric.getByText('name')).toBeInTheDocument()
      expect(metric.getByText('80')).toBeInTheDocument()
    });

    test("Click on metric", () => {
      expect(handleClick.mock.calls.length).toBe(0)
      fireEvent.click(metric.getByText('name'))
      expect(handleClick.mock.calls.length).toBe(1)
    });
  });

  describe("Metric advanced", () => {
    test("Circle svg appear on screen", () => {
      const handleClick = jest.fn()
      const props = { name: "name", value: 95, handleClick};
      const metric = render(<Metric {...props} />);
      const circle = metric.container.querySelector('circle')
      expect(circle).toBeInTheDocument()
      // expect(circle).toHaveStyle('color: rgb(71, 255, 130)');
    });
  });
});
