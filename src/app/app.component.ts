import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  //#region   Public Properties
  mobileQuery: MediaQueryList;
  navList = [
    {
      link: 'default',
      name: 'Default',
      exact: true
    },
    {
      link: 'onpush',
      name: 'On Push',
      exact: true
    },
    {
      link: 'onpush-broken',
      name: 'On Push Broken',
      exact: true
    }
  ];
  title = 'Change Detection Demo';
  //#endregion


  //#region   Private Properties
  private mobileQueryListener: () => void;
  //#endregion

  //#region   Constructor
  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router, private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }
  //#endregion

  //#region   Life Cycle Hooks
  ngOnInit(): void {
    this.registerEvents();
  }
  ngOnDestroy(): void {
  }
  //#endregion


  //#region   Private Methods
  private registerEvents(): void { }
  //#endregion
}
