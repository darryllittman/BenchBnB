import React from 'react';
import { fetchBenches } from '../util/bench_api_util';

class BenchIndex extends React.component {
  componentDidMount() {
    this.benches = fetchBenches();
  }

  render() {
    const b = this.benches.map ((bench) => (<li>{bench}</li>));
    return (
      <ul>
        {b};
      </ul>
    );
  }
}
//WHICH BenchIndexItem to clean up BenchIndex component's
export default BenchIndex;
