/**
 * @jest-environment jsdom
 */

 import React from "React";
 import userEvent from "@testing-library/user-event";
 import { render, screen, waitFor, fireEvent } from "@testing-library/react";
 import "@testing-library/jest-dom";

 import TitleContainer from "../client/containers/TitleContainer.jsx";
 import DropDownMenu from "../client/components/DropDownMenu.jsx";
 import store from "../client/store/store";
 import {selectEndpoints} from '../client/store/dataSlice';


test('testing DropDownMenu Endpoints', ()=> {
    let endpoints = store.getState().data.endpoints
})
 