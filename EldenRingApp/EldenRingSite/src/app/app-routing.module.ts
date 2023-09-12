import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AshOfWarDetailComponent } from './ash-of-war-detail/ash-of-war-detail.component';

const routes: Routes = [
  {path: '', component: TopnavbarComponent},
  {path: 'ashOfWarDetail', component: AshOfWarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
