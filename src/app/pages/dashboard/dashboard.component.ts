import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  constructor(private http: HttpClient) { }

  testData: any;

  testApi(){
    this.http.get('http://localhost:5000/api/resource/1').subscribe((data) => {
      this.testData = data['timestamp'];
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testApi();
  }
}
