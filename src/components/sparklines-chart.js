import React, { Fragment } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default ({ height, width, dataArray, color, units }) => {
  const roundedAverage = (array) => (array.reduce((prev, current) => prev + current) / array.length).toFixed(2);
  return (
    <Fragment>
      <div className="sparklines-chart-container">
        <Sparklines data={ dataArray }>
          <SparklinesLine color={ color } />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
      <p>{ `${roundedAverage(dataArray)} ${units}` }</p>
    </Fragment>
  );
};
