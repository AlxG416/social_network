import { createContext, Dispatch, SetStateAction } from "react";

import { IPerson } from "../types/types";

export interface UserContextValue {
    user: IPerson | null;
    setUser: Dispatch<SetStateAction<IPerson | null>>;
};

export var UserContext = createContext<UserContextValue | null>(null);
