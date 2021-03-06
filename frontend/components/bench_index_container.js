import { requestBenches } from '../actions/bench_actions';
import { connect } from 'react-redux';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

const BenchIndexContainer =
  connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

export default BenchIndexContainer;
