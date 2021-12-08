import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTaskbyId("61b00af65e6c3d8fadbb5bcf");
    this.deleteTaskbyId("61b0126d90d0135a638201b8");
    this.getTasks();
  }
  
  getTasks(){
    let tempObservable = this._http.get('http://localhost:8080/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getTaskbyId(id: any) {
    let url= id;
    let tempObservable = this._http.get('http://localhost:8080/tasks/'+url);
    tempObservable.subscribe(data => console.log("Got our task by ID:", data));
  }

  deleteTaskbyId(id: any) {
    let url= id;
    let tempObservable = this._http.get('http://localhost:8080/tasks/remove/'+url);
    tempObservable.subscribe(data => console.log("Task Removed"));
  }
}