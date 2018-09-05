import React, { Fragment } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ height, width, dataArray, color }) => (
  <Fragment>
    <Sparklines height={ height } width={ width } data={ dataArray }>
      <SparklinesLine color={ color } />
    </Sparklines>
  </Fragment>
);
