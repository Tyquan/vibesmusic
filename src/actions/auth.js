export const login = (id) => ({
    type: 'LOGIN',
    id
});

export const startLogin = () => {
    return () => {
        alert("User Logged In");
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        alert("User Logged Out");
    };
};