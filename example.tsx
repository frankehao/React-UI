import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import Introduce from './lib/doc/introduce';

const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span> Panda-UI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2><strong>组件</strong></h2>
          <ul>
            <li>
              <NavLink to="/introduce">介绍</NavLink>
            </li>
          </ul>
          <h2><strong>组件</strong></h2>
          <ul>
            <li>
              <NavLink to="/button">按钮</NavLink>
            </li>
            <li>
              <NavLink to="/icon">图标</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/introduce" component={Introduce}/>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; Panda-UI
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));