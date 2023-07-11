import { Component } from '@angular/core';
import datasource from '../../shared/datas/contexts.json'
import { ContextModel } from 'src/app/shared/models/context.model';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
  export class GameContentComponent {
    currentContent!: ContextModel

    ngOnInit(): void {
      console.log(datasource)
      this.currentContext()
    }

    currentContext(): void {
      this.currentContent = datasource.CONTEXT_01
    }
  }
