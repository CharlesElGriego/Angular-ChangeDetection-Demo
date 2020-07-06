import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/interfaces';


@Component({
  selector: 'app-father-op',
  templateUrl: './father-op.component.html',
  styleUrls: ['./father-op.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FatherOpComponent implements OnInit, OnChanges {

  @Input() employees: Employee[] = [];
  count = { number: 0 };
  selectedEmployee: Employee;

  myControl = new FormControl();
  filteredOptions: Observable<Employee[]>;

  constructor() { }


  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      switchMap((input: string) => {
        if (input.length > 0) {
          return of(this.filter(input.toLocaleLowerCase()));
        } else {
          return [];
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('** Father', changes);
  }
  addCount(): void {
    let num = this.count.number;
    num++;
    this.count = { ...this.count, number: num };
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
    this.selectedEmployee = { ...employee };
  }
}
