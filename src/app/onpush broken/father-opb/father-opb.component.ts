import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-father-opb',
  templateUrl: './father-opb.component.html',
  styleUrls: ['./father-opb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherOPBComponent implements OnInit, OnDestroy {
  @Input() employees: Employee[] = [];
  count = { number: 0 };
  selectedEmployee: Employee;
  myControl = new FormControl();
  filteredOptions: Employee[];

  private alive = true;
  constructor() { }
  ngOnInit(): void {
    this.myControl.valueChanges.pipe(
      switchMap((input: string) => {
        if (input.length > 0) {
          return of(this.filter(input.toLocaleLowerCase()));
        } else {
          return [];
        }
      })
    ).subscribe(data => {
      this.filteredOptions = data;
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }


  addCount(): void {
    let num = this.count.number;
    num++;
    this.count.number = num;
  }


  displayFn(employee: Employee): string {
    return employee ? employee.first_name : '';
  }

  filter(input: string): Employee[] {
    const array: Employee[] = [];
    this.employees.forEach(employee => {
      if (employee.first_name.toLocaleLowerCase().includes(input)) {
        array.push(employee);
      }
    });

    return array;
  }

  setSelected(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
