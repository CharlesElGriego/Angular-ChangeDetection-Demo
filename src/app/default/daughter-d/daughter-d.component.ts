import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-daughter-d',
  templateUrl: './daughter-d.component.html',
  styleUrls: ['./daughter-d.component.scss']
})
export class DaughterDComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

  sayMyName(): void {
    this.employee.first_name = 'Walter';
    this.employee.last_name = 'White';
    this.employee.email = 'ese_compa_ya_esta_muerto@nomas_no_le_han_avisado.com';
  }
}
