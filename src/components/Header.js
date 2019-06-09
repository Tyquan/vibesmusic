import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

function ShowAuth(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (<button className="btn btn-primary" onClick={startLogout}>Logout</button>);
    }
    return (<button className="btn btn-primary"><Link to="/LoginPage" className="loginBtn">Login</Link></button>);
}

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Link className="header__title" to="/">
                        <h1>Herra Hiphop</h1>
                    </Link>
                </div>
                <div className="col-md-4">
                    <ShowAuth isLoggedIn={false} />
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
  
export default connect(undefined, mapDispatchToProps)(Header);