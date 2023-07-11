import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameContentRoutingModule } from './game-content-routing.module';
import { GameContentComponent } from './game-content.component';


@NgModule({
  declarations: [
    GameContentComponent
  ],
  imports: [
    CommonModule,
    GameContentRoutingModule
  ]
})
export class GameContentModule { }
