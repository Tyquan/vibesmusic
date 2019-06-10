import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import AuthForm from '../AuthForm';
import { startSignup } from '../../actions/auth';
import Layout from '../Layout';

export const SignupPage = ({ startSignup }) => (
  <Layout>
    <div className="formy">
      <AuthForm />
      <br />
      <button className="button" onClick={startSignup}>Signup</button>
      <br />
      <p>Already a member? Login <Link to="/login">Here</Link></p>
    </div>
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
    startSignup: () => dispatch(startSignup())
});

export default connect(undefined, mapDispatchToProps)(SignupPage);