import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-grandpa-op',
  templateUrl: './grandpa-op.component.html',
  styleUrls: ['./grandpa-op.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandpaOpComponent implements OnInit, OnChanges {

  employees$: Observable<Employee[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.employees$ = this.http.get<Employee[]>('http://localhost:3000/employees');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('* Grandpa', changes);
  }
}
