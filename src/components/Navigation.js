import React from 'react';
import {Link} from 'react-router-dom';

function ShowUserNav(){
    const isLoggedIn = localStorage.getItem("herraIsLoggedIn");
    if (isLoggedIn) {
        return (<li><Link to="/">Subscriptions</Link></li>);
    } else {
        return (<li><Link to="/login">Login</Link></li>);
    }
}

export const Navigation = () => (
    <div className="row">
        <div className="col">
            <ul>
                <li>Home</li>
                <li>Trending</li>
                <ShowUserNav />
                <hr />
                <h5>Categories</h5>
                <li>Music</li>
                <li>Shows</li>
                <li>Interviews</li>
                <li>Podcasts</li>
            </ul>
        </div>
    </div>
);

export default Navigation;