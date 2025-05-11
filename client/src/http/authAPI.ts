import { $host } from "./axiosInstances";
import { IPerson } from "../types/types";

interface ServerResponse<T> {
    serverMessage: "success" | "denied";
    payload?: T;
}

export interface RegistrateParams {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirm: string;
}

export interface LoginParams {
    email: string;
    password: string;
}

export var registrate = async (obj: RegistrateParams): Promise<ServerResponse<IPerson>> => {
    var response = await $host.post('api/auth/registrate', obj)
    return response.data;
};

export var login = async (obj: LoginParams): Promise<ServerResponse<IPerson>>  => {
    var response = await $host.post('api/auth/login', obj);
    return response.data;
};
