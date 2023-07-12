import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ROUTER_CONST } from './shared/const/app.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DemoMiniGame';
  currentUrl: string = ''
  readonly ROUTER_CONST = ROUTER_CONST

  constructor(
    private router: Router
  ){}


  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((event: NavigationEnd | any) => {
      this.currentUrl = event.url && event.url.substring(1) || ''
    })
  }
}
