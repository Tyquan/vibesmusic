export const signup = (id) => ({
    type: 'SIGNUP',
    id
});

export const startSignup = () => {
    return () => {
        localStorage.setItem("herraIsLoggedIn", true);
        alert("User Signed Up");
    };
};

export const login = (id) => ({
    type: 'LOGIN',
    id
});

export const startLogin = () => {
    return () => {
        localStorage.setItem("herraIsLoggedIn", true);
        alert("User Logged In");
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        localStorage.removeItem("herraIsLoggedIn");
        alert("User Logged Out");
    };
};