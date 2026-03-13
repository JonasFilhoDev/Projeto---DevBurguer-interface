import { createContext, useContext, useState, useEffect } from 'react';

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
        } catch (e) {

        }
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburguer:userData');
    };

    useEffect(() => {
       const userInfoLocalStorage = localStorage.getItem('devburguer:userData') 

       if(userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage))
       }

    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be a valid context");
    }

    return context;
};