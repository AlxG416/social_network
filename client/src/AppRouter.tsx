import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";

import { authRoutes, publicRoutes, LOGIN_ROUTE, PROFILE_ROUTE } from "./routes";
import { UserContext } from "./context/UserContext";
import { IPerson } from "./types/types";
import NavBar from "./components/NavBar";
import NavigationLayout from "./components/NavigationLayout";
import ErrorPage from "./pages/ErrorPage";

var AppRouter: React.FC = () => {
    var [user, setUser] = useState<IPerson | null>(null);
    var navigate = useNavigate();
    
    useEffect(() => {
        var user = localStorage.getItem("user");
        user !== null && setUser(JSON.parse(user));
    }, []);

    useEffect(() => {
        user ? navigate(PROFILE_ROUTE + `/${user.id}`) : navigate(LOGIN_ROUTE);
    }, [user]);

    return (
        <UserContext value={{user, setUser}}>
            <NavBar />
            <Routes>
                {publicRoutes.map(route => <Route key={route.path} {...route} />)}
                {user &&
                    <Route element={<NavigationLayout />}>
                        {authRoutes.map(route => <Route key={route.path} {...route} />)}
                    </Route>
                }
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </UserContext>
    );
};

export default AppRouter;
