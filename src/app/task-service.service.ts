import { Injectable } from '@angular/core';
import { Task, ParentTask } from './Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  testData: Task[];
  private tasksUrl = 'http://localhost/ProjectManagerAPI/task/getAll';
  private tasksByIdUrl = 'http://localhost/ProjectManagerAPI/task/get/';
  private tasksCreateUrl = 'http://localhost/ProjectManagerAPI/task/create';
  private tasksUpdateUrl = 'http://localhost/ProjectManagerAPI/task/update/';
  private tasksEndUrl = 'http://localhost/ProjectManagerAPI/task/end/';
  private parentTaskUrl = 'http://localhost/ProjectManagerAPI/task/getParents';
  constructor(private http: HttpClient) {
 
  }


  getTasks(): Observable<Task[]> {
    //return this.testData;
    console.log('calling...');
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      catchError(this.handleError('getTasks', []))
    );;
    
  }

  getTasksById(task_Id: number): Observable<Task> {
    
    console.log('calling...getTasksById');
    return this.http.get<Task>(this.tasksByIdUrl + task_Id).pipe(
      tap(a => console.log('fetched heroes' + a)),
      catchError(this.handleError('getTasksById'))
    );;
    
  }

  endTaskById(task_Id: number): Observable<any> {
    
    console.log('calling...endTaskById' + task_Id);
    return this.http.get(this.tasksEndUrl + task_Id);
  }

  addTask(task: Task): Observable<any> {
    console.log("Create calling");
    console.log(task);
    return this.http.post(this.tasksCreateUrl, task);

  }

  updateTask(task: Task, task_Id: number): Observable<any> {
    console.log("update calling");
    console.log(task);
    return this.http.post(this.tasksUpdateUrl + task_Id, task);
   }

  getParents(): Observable<ParentTask[]> {
    return this.http.get<ParentTask[]>(this.parentTaskUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
