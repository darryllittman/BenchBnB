import React from 'react';
import { fetchBenches } from '../util/bench_api_util';

class BenchIndexItem extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <li>lat: {this.props.bench.lat} lng: {this.props.bench.lat}</li>
    );
  }
}

export default BenchIndexItem;
