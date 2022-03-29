import "@testing-library/jest-dom";
import currentViewSlice, { changeMetric, changeEndpoint } from '../client/store/currentViewSlice';
import store from '../client/store/store'


describe('CurrentViewSlice', () => {
  let initialState;
  const { currentView } = store.getState();
  
  beforeEach(() => {
    initialState = currentView;
  });

  it('should provide a default state when given an undefined input', () => {
    expect(currentViewSlice(undefined, { type: undefined})).toEqual(initialState);
  });
  
  describe('Unrecognized action types', () => {
    it('should return the original state', () => {
      const action = { type: 'FAKE_TYPE'};
      expect(currentViewSlice(initialState, action)).toBe(initialState);
    })
  });

  describe('changeMetric', () => {
    // const action = store.dispatch(changeMetric('SEO'))
    // console.log(action, ' IN CHANGE METRIC TEST');
    
    it('should change currentMetric to action payload', () => {
      const { currentMetric } = store.getState().currentView;
      expect(currentMetric).toEqual('default')
      const metricArr = ['Performance', 'Accessibility', 'Best Practices', 'SEO', 'default']
      for(const metric of metricArr){
        const action = store.dispatch(changeMetric(metric))
        const newState = currentViewSlice(initialState, action);
        const newMetric = store.getState().currentView.currentMetric;
        expect(newMetric).toEqual(metric);
      };
    });

    it('should return Error for unrecognized actions', () => {
      // console.log('CHANGE METRIC Action: ', action);
      const action = store.dispatch(changeMetric('FALSE ACTION'));
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      console.log('CHANGE METRIC currentMetric: ', currentMetric);
      expect(action).toBeInstanceOf(Error);
      // expect(newState).toEqual(initialState);
    });
  })

  describe('changeEndpoint', () => {
    it('should change Endpoint to action payload', () => {
      const action = store.dispatch(changeEndpoint('SEO'))
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      expect(currentMetric).toBe(metric);
    });
  })
  describe('changePerformanceMetrics', () => {
    it('should change performanceMetrics to action payload', () => {
      const action = store.dispatch(changeMetric('SEO'))
      const metric = action.payload;
      const { currentMetric } = store.getState().currentView;
      expect(currentMetric).toBe(metric);
    });
  })
  describe('addRunValue', () => {
    it('should add run value to the array', () => {

    });
  })


});