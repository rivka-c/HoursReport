import { Project } from "./project";
import { User } from "./user";

export class HoursReport {
    id!: number;
    fromDateTime!: Date;
    toDateTime!: Date;
    userId!: number;
    projectId!: number;
    project!:Project;
    user!:User;
    
}