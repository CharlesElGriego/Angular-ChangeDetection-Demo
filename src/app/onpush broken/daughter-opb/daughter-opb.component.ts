import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-daughter-opb',
  templateUrl: './daughter-opb.component.html',
  styleUrls: ['./daughter-opb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaughterOPBComponent implements OnInit {

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
