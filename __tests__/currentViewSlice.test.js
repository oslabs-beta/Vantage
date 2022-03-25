import { createSlice } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { currentViewSlice  } from '../client/store/currentViewSlice';


describe('CurrentViewSlice Testing', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      theme: "dark",
      currentMetric: "default",
      currentEndpoint: "/",
      performanceMetrics: {
        FCP: false,
        SI: false,
        LCP: false,
        TTI: false,
        TBT: false,
        CLS: false,
      },
      runValueArr: [],
      runValueArrSort: [],
      selectorSwitch: false,
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(createSlice(undefined, { type: undefined })).toEqual(initialState);
    });
  });


});