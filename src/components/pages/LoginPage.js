import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import AuthForm from '../AuthForm';
import { startLogin } from '../../actions/auth';
import Layout from '../Layout';

export const LoginPage = ({ startLogin }) => (
  <Layout>
    <div className="formy">
      <AuthForm />
      <br />
      <button className="button" onClick={startLogin}>Login</button>
      <br />
      <div className="row">
        <div className="col">
          <p>Not a member yet? Signup up <Link to="/signup">Here</Link></p>
        </div>
      </div>
    </div>
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);