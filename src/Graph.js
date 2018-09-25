import React from 'react';
import ChartistGraph from 'react-chartist';

import Chartist from './chartist-node-safe.js';

const Graph = () => {
  const data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };

  const options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  const type = 'Bar'

  return (
    <ChartistGraph
      type={type}
      style={{ height: '500px' }}
      data={data}
      options={options}
    />
  );
}

export default Graph;