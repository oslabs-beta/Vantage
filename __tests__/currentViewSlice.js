import "@testing-library/jest-dom";
import currentViewSlice, { 
  changeMetric, 
  changeEndpoint, 
  changePerformanceMetrics,
  changeSelectorSwitch
} from '../client/store/currentViewSlice';
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
    it('should not affect state', () => {
      const action = { type: 'FAKE_TYPE'};
      expect(currentViewSlice(initialState, action)).toBe(initialState);
    })
  });

  describe('changeMetric', () => {   
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
  })

  describe('changeEndpoint', () => {
    it('should change Endpoint to action payload', () => {
      const action = store.dispatch(changeEndpoint('Documentation'))
      const endpoint = action.payload;
      const newState = currentViewSlice(initialState, action);
      const { currentEndpoint } = store.getState().currentView;
      expect(currentEndpoint).toEqual(endpoint);
    });
  })
  describe('changePerformanceMetrics', () => {
    it('should change specific performanceMetric to opposite boolean', () => {
      expect(store.getState().currentView.performanceMetrics.FCP).toEqual(false);
      const action = store.dispatch(changePerformanceMetrics('FCP'))
      const newState = currentViewSlice(initialState, action)
      const { FCP } = store.getState().currentView.performanceMetrics;
      expect(FCP).toEqual(true);
    });
    
    it('should only change action payloads performance metrics', () => {
      const action = store.dispatch(changePerformanceMetrics('FCP'))
      const newState = currentViewSlice(initialState, action)
      const { SI, LCP, TTI, TBT, CLS } = store.getState().currentView.performanceMetrics;
      expect(SI).toEqual(false);
      expect(LCP).toEqual(false);
      expect(TTI).toEqual(false);
      expect(TBT).toEqual(false);
      expect(CLS).toEqual(false);
    });
  })
});