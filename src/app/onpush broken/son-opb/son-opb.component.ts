import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-son-opb',
  templateUrl: './son-opb.component.html',
  styleUrls: ['./son-opb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SonOPBComponent implements OnInit {
  @Input() count: { number: number };
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
