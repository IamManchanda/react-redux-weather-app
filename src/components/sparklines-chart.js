import React, { Fragment } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default ({ height, width, dataArray, color }) => {
  const roundedAverage = (array) => (array.reduce((prev, current) => prev + current) / array.length).toFixed(2);
  return (
    <Fragment>
      <Sparklines height={ height } width={ width } data={ dataArray }>
        <SparklinesLine color={ color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>{ roundedAverage(dataArray) }</p>
    </Fragment>
  );
};
