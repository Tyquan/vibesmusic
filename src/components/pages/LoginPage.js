import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import AuthForm from '../AuthForm';
import { startLogin } from '../../actions/auth';
import Navigation from '../Navigation';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
      <Header></Header>
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navigation />
          </div>
          <div className="col-md-10">
            <div className="formy">
              <AuthForm />
              <br />
              <button className="button" onClick={startLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);