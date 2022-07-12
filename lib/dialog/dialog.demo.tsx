import IconExample1 from './dialog.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
        <IconExample1/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;
