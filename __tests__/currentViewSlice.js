import "@testing-library/jest-dom";
import currentViewSlice, { 
  changeMetric, 
  changeEndpoint, 
  changePerformanceMetrics,
} from '../client/store/currentViewSlice';
import store from '../__test_utils__/store_test'


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
        store.dispatch(changeMetric(metric))
        const newMetric = store.getState().currentView.currentMetric;
        expect(newMetric).toEqual(metric);
      };
    });
  })

  describe('changeEndpoint', () => {
    it('should change Endpoint to action payload', () => {
      const action = store.dispatch(changeEndpoint('Documentation'))
      const endpoint = action.payload;
      const { currentEndpoint } = store.getState().currentView;
      expect(currentEndpoint).toEqual(endpoint);
    });
  })
  describe('changePerformanceMetrics', () => {
    it('If a non valid performance metric is dispatched, nothing should change', () => {
      store.dispatch(changePerformanceMetrics('FCP'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual(['FCP']);
      store.dispatch(changePerformanceMetrics('YES'))
      store.dispatch(changePerformanceMetrics('NO'))
      store.dispatch(changePerformanceMetrics('MAYBE'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual(['FCP']);
      store.dispatch(changePerformanceMetrics('FCP'))
    });
    
    it('should add and remove performance metrics from performanceMetricsArr', () => {
      store.dispatch(changePerformanceMetrics('FCP'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual(['FCP']);
      store.dispatch(changePerformanceMetrics('TTI'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual(['FCP','TTI']);
      store.dispatch(changePerformanceMetrics('TTI'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual(['FCP']);
      store.dispatch(changePerformanceMetrics('FCP'))
      expect(store.getState().currentView.performanceMetricsArr).toEqual([]);
    });
  })
});