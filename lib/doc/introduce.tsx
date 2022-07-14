import React from 'react';
import './introduce.scss';

const Introduce: React.FunctionComponent = () => {
  return (
    <div className={'main'}>
      <h1>介绍</h1>
      <p>Panda-UI 是一款基于 <code>React</code> 和 <code>TypeScript</code> 的 UI 组件库</p>
      <p>源代码放在了 <strong className={'blue'}> <a href="https://github.com/frankehao/React-UI.git">GitHub</a></strong>
        。你可以直接查看每个组件的源代码和示例，运行方法见 <code>README.md</code>。</p>
    </div>
  );
};

export default Introduce;