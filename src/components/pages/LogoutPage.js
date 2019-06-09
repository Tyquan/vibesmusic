import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { startLogout } from '../../actions/auth';

export const LogoutPage = ({ startLogout }) => (
  <div className="box-layout">
      <Header></Header>
      <h3>Hate to see you go...</h3>
      <br />
      <button className="btn btn-danger" onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LogoutPage);