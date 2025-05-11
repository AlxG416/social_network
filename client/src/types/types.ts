export interface IPerson {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
};

export interface IPost {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
};

export function assertIPerson(obj: any): asserts obj is IPerson {};
