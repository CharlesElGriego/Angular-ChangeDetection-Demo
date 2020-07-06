import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-grandpa-d',
  templateUrl: './grandpa-d.component.html',
  styleUrls: ['./grandpa-d.component.scss']
})
export class GrandpaDComponent implements OnInit {

  employees: Employee[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Employee[]>('http://localhost:3000/employees').subscribe(data => this.employees = data);
  }
}
