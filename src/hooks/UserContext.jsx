/* global localStorage */
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(() => {
        try {
            const stored = localStorage.getItem('devburguer:userData');
            return stored ? JSON.parse(stored) : {};
        } catch {
            return {};
        }
    });

    const putUserData = (data) => {
        let userLoad = data;
        if (typeof data === 'string') {
            userLoad = { token: data };
        }

        setUserInfo(userLoad);

        try {
            localStorage.setItem('devburguer:userData', JSON.stringify(userLoad));
        } catch {
            // Ignora erro ao salvar no localStorage
        }
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburguer:userData');
    };

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburguer:userData');

        if (userInfoLocalStorage) {
            try {
                setUserInfo(JSON.parse(userInfoLocalStorage));
            } catch {
                // Se houver erro ao parsear, limpa o localStorage
                localStorage.removeItem('devburguer:userData');
                setUserInfo({});
            }
        }

    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be a valid context");
    }

    return context;
};