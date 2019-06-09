import React from 'react';
import {Link} from 'react-router-dom';

function ShowAuth() {
    const isLoggedIn = localStorage.getItem("herraIsLoggedIn");
    if (isLoggedIn) {
        return (<button className="btn btn-primary"><Link to="/logout" className="loginBtn">Logout</Link></button>);
    } else {
        return (<button className="btn btn-primary"><Link to="/login" className="loginBtn">Login</Link></button>);
    }
}

export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h4><Link className="header__title" to="/">Herra Hiphop</Link></h4>
                </div>
                <div className="col-md-4">
                    <ShowAuth />
                </div>
            </div>
        </div>
    </header>
);

export default Header;