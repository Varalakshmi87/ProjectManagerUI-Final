import { Project } from './Project';
import { User } from './User';


export class Task {
    public TaskID?: number;
    public Parent_ID?: number;
    public Project_ID?: number;
    public Task?: string;
    public StartDate?: Date;
    public EndDate?: Date;
    public Priority?: number;
    public Status?: string;
    public UserId?: number;
    public IsParentTask?: boolean;
    public IsTaskEnded?: boolean;
    public IsCreate?: boolean = false;
    public ParentTask?: ParentTask;
    public Project?: Project;
    public Users?: User[];
    public ProjectName?: string;
    public ParentTaskName?: string;
    public TaskUserName?: string;
    public ParentDTOName?: string;
    public ProjectDTOName?: string;
}

export class SearchTask {
    public Task?: string;
    public ParentTask?: string;
    public PriorityFrom?: number;
    public PriorityTo?: number;
    public StartDate?: Date;
    public EndDate?: Date;
}

export class ParentTask {
    public Parent_ID?: number;
    public Parent_Task?: string;
}