import React, { useContext } from "react";
import { Button } from "antd";

import { UserContextValue, UserContext } from "../context/UserContext";

var navBarStyle: React.CSSProperties = {
    backgroundColor: 'grey',
    paddingInline: '20px',
    height: '6vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
};

var NavBar: React.FC = () => {
    var userContext = useContext<UserContextValue | null>(UserContext);

    function logOut() {
        localStorage.removeItem("user");
        userContext !== null && userContext.setUser(null);
    }
    
    return (
        <div style={navBarStyle}>
            {userContext !== null && userContext.user !== null && <Button onClick={logOut}>Выйти</Button>}
        </div>
    );
};

export default NavBar;
