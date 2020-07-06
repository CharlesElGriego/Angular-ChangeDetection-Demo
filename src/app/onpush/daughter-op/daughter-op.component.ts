import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-daughter-op',
  templateUrl: './daughter-op.component.html',
  styleUrls: ['./daughter-op.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaughterOpComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('*** Daughter', changes);
  }
  sayMyName(): void {
    // Remove comments if you want to test the error
    // this.employee.first_name = 'Walter';
    // this.employee.last_name = 'White';
    // this.employee.email = 'ese_compa_ya_esta_muerto@nomas_no_le_han_avisado.com'

    this.employee = {
      ...this.employee,
      first_name: 'Walter',
      last_name: 'White',
      email: 'ese_compa_ya_esta_muerto@nomas_no_le_han_avisado.com'
    };

  }
}
