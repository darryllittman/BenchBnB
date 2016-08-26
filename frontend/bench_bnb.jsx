import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootReducer from './reducers/root_reducer';
import { BenchConstants, requestBenches, receiveBenches }
  from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('root');
  ReactDOM.render(<div>"I'm in"</div>, content);

  window.store = configureStore();
  window.requestBenches = requestBenches;
});
