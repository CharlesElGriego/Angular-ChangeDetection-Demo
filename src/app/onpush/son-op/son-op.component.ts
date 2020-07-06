import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-son-op',
  templateUrl: './son-op.component.html',
  styleUrls: ['./son-op.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SonOpComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('*** Son', changes);
  }
  seeError(): void {
    console.log(this.employee);
  }
}
