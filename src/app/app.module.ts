import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product-list/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo: 'welcome', pathMatch:'full'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
