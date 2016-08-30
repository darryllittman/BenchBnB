import React from 'react';
import { fetchBenches } from '../util/bench_api_util';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    // this.props.requestBenches();
  }

  render() {

    const b = this.props.benches.map ((bench) => (<BenchIndexItem
      bench={bench} key={bench.lat+bench.lng}/>));
    return (
      <ul>
        {b}
      </ul>
    );
  }
}

export default BenchIndex;
