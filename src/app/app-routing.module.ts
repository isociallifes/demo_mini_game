import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_CONST } from './shared/const/app.const';

const routes: Routes = [
  {
    path: ROUTER_CONST.HOME,
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: ROUTER_CONST.START_GAME,
    pathMatch: 'full',
    loadChildren: () => import('./modules/game-content/game-content.module').then(m => m.GameContentModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
