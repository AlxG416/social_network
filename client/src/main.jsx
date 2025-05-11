import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import AppRouter from "./AppRouter.tsx";
import { store } from "./store/store.ts";
import "./index.css";

createRoot(root).render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </BrowserRouter>
);
