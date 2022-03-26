/**
 * @jest-environment jsdom
 */

 import React from "React";
 import userEvent from "@testing-library/user-event";
 import { render, screen, waitFor, fireEvent } from "@testing-library/react";
 import "@testing-library/jest-dom";
 import { Provider } from "react-redux";
 import TitleContainer from "../client/containers/TitleContainer.jsx";
 import DropDownMenu from "../client/components/DropDownMenu.jsx";
 import App from "../client/App.jsx";
 import store from "../client/store/store";
 import {selectEndpoints} from '../client/store/dataSlice';
 import regeneratorRuntime from "regenerator-runtime";


describe('testing Title Container', ()=> {
    let menu
    let titleContainer
    const endpoints = store.getState().data.endpoints

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

      test("DropDownMenu lists Endpoints from store", () => {
        let menuIcon = titleContainer.container.querySelector('#dropDownMenu')
        fireEvent.click(menuIcon);
        endpoints.forEach(el => {
          expect(menu.getAllByText(el)).toBeTruthy();
        });
      });

      test("Clicking endpoint changes view slice", () => {
        let menuIcon = titleContainer.container.querySelector('#dropDownMenu')
        fireEvent.click(menuIcon);
        const endpointText = endpoints[0];
        const menuItem = menu.getByText(endpointText);
        fireEvent.click(menuItem)
        expect(titleContainer.getAllByText(endpointText)).toBeTruthy();
      });
      




    

})
 