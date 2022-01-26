import { ProjectUser } from "./projectUser";

export class User {
    id!: number;
    name!: string;
    password?: string;
    role?: number;
    email?:string;
    projectUser?:ProjectUser[];
}