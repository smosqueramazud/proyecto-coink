import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  movil: any;
  opened: boolean;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  name = 'Jeff'

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) { 
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit(): void {
    this.movil = sessionStorage.getItem('movil');
    console.log(this.movil);
  }

}
