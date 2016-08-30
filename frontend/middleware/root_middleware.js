import { applyMiddleware } from 'redux';
import BenchesMiddleware from './benches_middleware';
import SessionMiddleware from '../middleware/session_middleware';

const RootMiddleware =
  applyMiddleware(BenchesMiddleware, SessionMiddleware);

export default RootMiddleware;
