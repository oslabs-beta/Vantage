import "@testing-library/jest-dom";
import { currentViewSlice } from '../client/store/currentViewSlice';


describe('CurrentViewSlice Testing', () => {
  let initialState;
  const fakeAction = { type: 'NOT_A_REAL_ACTION'};

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
      const { changeMetric } = currentViewSlice.actions;
      console.log(changeMetric);
      const newState = changeMetric(undefined, fakeAction)
      console.log(newState);
      expect(newState).toBe(initialState);
    });
  });


});