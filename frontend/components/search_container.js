import { requestBenches } from '../actions/bench_actions';
import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import Search from './search';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

const SearchContainer =
  connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
