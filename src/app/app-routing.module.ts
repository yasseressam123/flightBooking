import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home' , pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'result', component: ResultComponent
  },
  {
    path: 'book', component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
