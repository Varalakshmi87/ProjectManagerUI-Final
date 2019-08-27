import { User } from './User';

export class Project {
    public Project_ID: number;
    public ProjectName: string;
    public StartDate?: Date;
    public EndDate?: Date;
    public Priority: number;
    public UserId?: number;
    public ManagerName: string;
    public lstUsers: User[];
    public TotalTaskCount: number;
    public CompletedTaskCount: number;
    public IsCreate: boolean = false;
}