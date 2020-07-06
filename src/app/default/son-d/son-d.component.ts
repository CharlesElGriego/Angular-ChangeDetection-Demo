import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-son-d',
  templateUrl: './son-d.component.html',
  styleUrls: ['./son-d.component.scss']
})
export class SonDComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
