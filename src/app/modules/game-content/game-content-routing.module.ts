import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameContentComponent } from './game-content.component';

const routes: Routes = [{ path: '', component: GameContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameContentRoutingModule { }
