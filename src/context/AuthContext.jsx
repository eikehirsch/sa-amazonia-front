import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = (jwtToken) => {
        setToken(jwtToken);
        localStorage.setItem("token", jwtToken);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const isAuthenticated = () => !!token;

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);