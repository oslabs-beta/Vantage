import "@testing-library/jest-dom";
import { changeMetric, currentViewSlice } from '../client/store/currentViewSlice';
import store from '../client/store/store'


describe('CurrentViewSlice', () => {
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

  it('should provide a default state', () => {
    const newState = store.getState().currentView;
    expect(newState).toEqual(initialState);
  });

  describe('changeMetric', () => {
    it('should change currentMetric to action payload', () => {
      const action = store.dispatch(changeMetric('SEO'))
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      expect(currentMetric).toBe(metric);
    });

    it('should return the same state object for unrecognized actions', () => {
      const action = store.dispatch(changeMetric('FALSE ACTION'));
      const metric = action.payload;
      console.log(newState);
      const { currentMetric } = store.getState().currentView;
      expect(changeMetric).toEqual('default');
      // expect(newState).toEqual(initialState);
    });
  })

  describe('changeEndpoint', () => {
    it('should change Endpoint to action payload', () => {
      const action = store.dispatch(changeMetric('SEO'))
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      console.log(currentMetric);
      expect(currentMetric).toBe(metric);
    });
  })
  describe('changePerformanceMetrics', () => {
    it('should change performanceMetrics to action payload', () => {
      const action = store.dispatch(changeMetric('SEO'))
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      console.log(currentMetric);
      expect(currentMetric).toBe(metric);
    });
  })
  describe('addRunValue', () => {
    it('should add run value to the array', () => {

    });
  })


});