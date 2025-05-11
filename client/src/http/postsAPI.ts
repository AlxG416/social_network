import { $authHost } from "./axiosInstances";
import { IPost } from "../types/types";

interface ServerResponse<T> {
    serverMessage: "success" | "denied";
    payload?: T;
}

export interface CreatePostParams {
    title: string;
    content: string;
    userId: number | string;
}

export interface DeletePostParams {
    id: number | string;
    userId: number | string;
}

export interface GetAllPostsParams {
    userId: number | string;
}

export interface GetSomePostsParams {

}

export interface ChangePostParams {
    id: number | string;
    userId: number | string;
    title: string;
    content: string;
}

export var serverCreatePost = async (obj: CreatePostParams): Promise<ServerResponse<IPost>> => {
    var response = await $authHost.post('api/posts/create', obj);
    return response.data;
};

export var serverDeletePost = async (obj: DeletePostParams): Promise<ServerResponse<IPost>> => {
    var response = await $authHost.post('api/posts/delete', obj);
    return response.data;
};

export var serverGetAllPosts = async (obj: GetAllPostsParams): Promise<ServerResponse<IPost[]>> => {
    var response = await $authHost.post('api/posts/getAll', obj);
    return response.data;
};

export var serverGetSomePosts = async (obj: GetSomePostsParams): Promise<ServerResponse<IPost[]>> => {
    var response = await $authHost.post('api/posts/getSome', obj);
    return response.data;
};

export var serverChangePost = async (obj: ChangePostParams): Promise<ServerResponse<IPost>> => {
    var response = await $authHost.put('api/posts/change', obj);
    return response.data;
};
