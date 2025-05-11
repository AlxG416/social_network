import { $authHost } from "./axiosInstances";
import { IPerson } from "../types/types";

interface ServerResponse<T> {
    serverMessage: "success" | "denied";
    payload?: T;
}

export interface GetUserParams {
    id: string | number;
}

export var serverGetAllUsers = async (): Promise<ServerResponse<IPerson[]>> => {
    var response = await $authHost.post('api/users/getAll');
    return response.data;
};

export var serverGetUser = async (obj: GetUserParams): Promise<ServerResponse<IPerson>> => {
    var response = await $authHost.post('api/users/getUser', obj);
    return response.data;
};
