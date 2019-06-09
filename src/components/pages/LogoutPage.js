import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { startLogout } from '../../actions/auth';

export const LogoutPage = ({ startLogout }) => (
  <div className="box-layout">
      <Layout>
      	<h3>Hate to see you go...</h3>
      	<br />
      	<button className="btn btn-danger" onClick={startLogout}>Logout</button>
      </Layout>
      
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LogoutPage);