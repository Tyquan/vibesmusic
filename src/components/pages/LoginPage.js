import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../AuthForm';
import { startLogin } from '../../actions/auth';
import Layout from '../Layout';

export const LoginPage = ({ startLogin }) => (
  <Layout>
    <div className="formy">
      <AuthForm />
      <br />
      <button className="button" onClick={startLogin}>Login</button>
    </div>
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);