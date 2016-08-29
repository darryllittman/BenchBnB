import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootReducer from './reducers/root_reducer';
import { BenchConstants, requestBenches, receiveBenches }
  from './actions/bench_actions';
import { fetchBenches } from './util/bench_api_util';
import { Provider } from 'react-redux';
import BenchIndexContainer
  from './components/bench_index_container';
import Search from './components/search';
import SearchContainer from './components/search_container';


// google maps key: AIzaSyCmVhh9ZclSkVg-4Fq7fCFBINbZnUtCXrw
  const configuredStore = configureStore();
  const Root = () => (
    <Provider store={configuredStore}>
      <SearchContainer />
    </Provider>
  );

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('root');
  // ReactDOM.render(<div>i'm working</div>, content);
  ReactDOM.render(<Root />, content);

  window.store = configureStore();
  window.requestBenches = requestBenches;
  window.fetchBenches = fetchBenches;

});
