import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import {CalendarModule} from 'primeng/calendar';
import {TreeSelectModule} from 'primeng/treeselect';
import {InputTextModule} from 'primeng/inputtext';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { BookComponent } from './components/book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    CommonModule,
    BrowserAnimationsModule,
    TreeSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
