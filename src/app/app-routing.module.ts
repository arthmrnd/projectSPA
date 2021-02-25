import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { rpgComponent } from './components/rpg/rpg.component';
import { actionComponent } from './components/action/action.component';
import { racingComponent } from './components/racing/racing.component';


const routes: Routes = [
  

  {
    path: 'action',
    component: actionComponent
  },
  {
    path:'racing',
    component: racingComponent
  },
  {
    path:'rpg',
    component: rpgComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
