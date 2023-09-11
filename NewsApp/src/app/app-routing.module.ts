import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path: '', component: TopheadingComponent}, // Routes to home
  {path: 'techNews', component: TechnewsComponent}, // Routes to tech news
  {path: 'bizNews', component: BusinessnewsComponent},
  {path: 'sportsNews', component: SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
