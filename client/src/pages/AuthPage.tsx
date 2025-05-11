import React from "react";
import { useLocation } from "react-router";

import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

var layoutStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '94vh'
};

var AuthPage: React.FC = () => {
    var { pathname } = useLocation();

    return (
        <div style={{...layoutStyle}}>
            {pathname === '/login' ?
                <LoginForm />
                :
                <RegistrationForm />
            }
        </div>
    );
};

export default AuthPage;
