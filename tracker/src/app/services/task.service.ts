import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='http://localhost:9090/api/todos/'
  private getUrl ='http://localhost:9090/api/todos/get-todos'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<any>{
    return this.http.get(this.getUrl );
  }

  deleteTask(id:number):Observable<any>{
    const url=`${this.apiUrl}delete/${id}`;
    return this.http.delete(url,{responseType:'text'});
  }

  updateTaskReminder(id:number,value:any):Observable<Task>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.put<Task>(url,value);    
  }
  addTask(task:Task):Observable<Task>{
    const url =`${this.apiUrl}create`;
    return this.http.post<Task>(url,task);
  }
}
