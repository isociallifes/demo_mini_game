import { Component } from '@angular/core';
import datasource from '../../shared/data/contexts.json'
import { ContextModel } from 'src/app/shared/models/context.model';
import { ActionModel } from 'src/app/shared/models/action.model';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/shared/const/app.const';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
  export class GameContentComponent {
    currentContent!: ContextModel
    readonly CONTEXT_01: string = 'CONTEXT_01'

    constructor(
      private router: Router
    ) {}

    ngOnInit(): void {
      this.currentContext(this.CONTEXT_01)
    }

    currentContext(destination: string): void {
      this.currentContent = datasource[destination as keyof typeof datasource]
    }

    onTriggerAction(action: ActionModel): void {
      if (action.destination === 'none') {
        this.router.navigate([ROUTER_CONST.HOME])
      }
      this.currentContext(action.destination)
    }
  }
