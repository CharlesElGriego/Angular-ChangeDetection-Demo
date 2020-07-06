import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-grandpa-opb',
  templateUrl: './grandpa-opb.component.html',
  styleUrls: ['./grandpa-opb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandpaOPBComponent implements OnInit {

  employees: Employee[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Employee[]>('http://localhost:3000/employees').subscribe(data => this.employees = data);
  }
}
