import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  createtasks:Task = new Task(0,"","",false)
  

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => (this.tasks = tasks),
      (error) => {
        this.tasks = [];
        console.log(error);
      }
    );
  }

  deleteTask(id:number):void{
    this.taskService.deleteTask(id)
    .subscribe(
      data=> {
        this.tasks=data;
        this.taskService.getTasks();
      },
      
      error=>{
        this.tasks=[];
        console.log(error)
      }
    );
  }
  toggleReminder(task:Task){
    const taskId = task.id!;
    const updatedTask = { ...task, reminder: !task.reminder };
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(taskId,updatedTask).subscribe(
      ()=> {this.getTasks();
    }
    );
  }
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      ()=>{
      this.getTasks();
      }
    );
  }
  
  

}
