import React, {Component} from 'react';

class AuthForm extends Component {
    render(){
        return (
            <form>
                <label>Username</label>
                <input type="text" className="form-control" name="username" required/>
                <label>Password</label>
                <input type="password" className="form-control" name="password" required/>
            </form>
        );
    }
};

export default AuthForm;