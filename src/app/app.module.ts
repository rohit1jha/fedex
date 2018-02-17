import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
 
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'create-order',
    component: CreateOrderComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // HttpClientModule, HttpClient
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
