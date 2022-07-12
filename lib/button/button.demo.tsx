import React from 'react';
import ButtonExample from './button.example';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./button.example.tsx').default}>
      <ButtonExample/>
    </Demo>
  );
};

export default IconDemo;
