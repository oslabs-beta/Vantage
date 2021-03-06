/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import TitleContainer from "../client/containers/TitleContainer.jsx";
import DropDownMenu from "../client/components/DropDownMenu.jsx";
import regeneratorRuntime from "regenerator-runtime";

//Test store
import store from '../__test_utils__/store_test'

describe("testing Title Container", () => {
  let menu;
  let titleContainer;
  const endpoints = store.getState().data.endpoints;

  beforeEach(async () => {
    process.env.NODE_ENV = "development";
    titleContainer = await render(
      <Provider store={store}>
        <TitleContainer />
      </Provider>
    );
    menu = await render(
      <Provider store={store}>
        <DropDownMenu />
      </Provider>
    );
  });

  test("Title Container contains title", () => {
    expect(titleContainer.getByText("Vantage")).toBeTruthy();
  });

  test("DropDownMenu lists Endpoints from store", () => {
    let menuIcon = titleContainer.container.querySelector("#dropDownMenu");
    fireEvent.click(menuIcon);
    endpoints.forEach((el) => {
      expect(menu.getAllByText(el)).toBeTruthy();
    });
  });

  test("Clicking endpoint changes view slice", () => {
    let menuIcon = titleContainer.container.querySelector("#dropDownMenu");
    const endpointText = endpoints[0];
    expect(titleContainer.queryAllByText(endpointText)).toHaveLength(0);
    fireEvent.click(menuIcon);
    const menuItem = menu.getByText(endpointText);
    fireEvent.click(menuItem);
    expect(titleContainer.getAllByText(endpointText)).toBeTruthy();
  });
});
