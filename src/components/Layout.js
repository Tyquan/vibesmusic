import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

export const Layout = (props) => (
  <div className="box-layout">
    <Header></Header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-9">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default Layout;