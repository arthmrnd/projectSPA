import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { actionComponent } from './action/action.component';
import { racingComponent } from './racing/racing.component';
import { rpgComponent } from './rpg/rpg.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [actionComponent, racingComponent, rpgComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[actionComponent, racingComponent, rpgComponent]
})
export class ComponentsModule { }
