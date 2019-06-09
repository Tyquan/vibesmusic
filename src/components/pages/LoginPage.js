import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { startLogin } from '../../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
      <Header></Header>
      <button className="button" onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);