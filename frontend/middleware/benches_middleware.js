import { BenchConstants } from '../actions/bench_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    BenchConstants.REQUEST_BENCHES:
      console.log('reqeust benches middleware section');
      return next(action);
    default:
    return next(action);
  }
}

export default BenchesMiddleware;
