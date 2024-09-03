import { useState, createContext, useMemo } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [member, setMember] = useState({
        id: '',
        pwd: '',
        name: ''
    });

    const contextValue = useMemo(() => ({
        isLogin,
        setIsLogin,
        member,
        setMember
    }), [isLogin, member])
    
    return (   
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}