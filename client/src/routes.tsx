import { RouteProps } from "react-router";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import ChatPage from "./pages/ChatPage/ChatPage";

import AuthPage from "./pages/AuthPage";

export var PROFILE_ROUTE = "/profile";
export var MESSAGES_ROUTE = "/messages";
export var PEOPLE_ROUTE = "/people";

export var REGISTRATION_ROUTE = "/registration";
export var LOGIN_ROUTE = "/login";

/**
 *  Routes for logged-in user
 */
export var authRoutes: RouteProps[] = [
    {
      path: PROFILE_ROUTE + '/:userId',
      element: <ProfilePage />
    },
    {
      path: MESSAGES_ROUTE,
      element: <MessagesPage />
    },
    {
      path: MESSAGES_ROUTE + '/:chatId',
      element: <ChatPage />
    },
    {
      path: PEOPLE_ROUTE,
      element: <PeoplePage />
    }
];

/**
 * Routes for everybody
 */
export var publicRoutes: RouteProps[] = [
    {
        path: REGISTRATION_ROUTE,
        element: <AuthPage />
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthPage />
    }
];
