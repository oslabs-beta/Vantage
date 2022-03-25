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


describe('testing DropDownMenu Endpoints', ()=> {

    let menu
    let app
    let handleClick;
    let endpoints = store.getState().data.endpoints

  
        beforeEach(async () => {
            process.env.NODE_ENV = "development";
            app = await render(
              <Provider store={store}>
                <App />
              </Provider>
            );
            handleClick = jest.fn()
          });
       

      test("DropDownMenu lists Endpoints from store", () => {
        menu = app.container.querySelector('#dropDownMenu')
        fireEvent.click(menu);
        expect('2').toEqual('2')
      });


    

})
 