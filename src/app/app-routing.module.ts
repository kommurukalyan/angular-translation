import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketComponent } from './Cricket/cricket.component';
import { FootballComponent } from './Football/football.component';
import { HomeComponent } from './Home/home.component';
import { TestComponent } from './Test/test.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  children:
[
  {
    path: 'test', 
    component:TestComponent, 
  }]},
  {path: 'cricket', component: CricketComponent},
  {path: 'football', component: FootballComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
