import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoBox2Component } from './info-box2/info-box2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    InfoBox2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'info-box', component: InfoBoxComponent},
      {path: 'info-box2', component: InfoBox2Component},
      {path: '', redirectTo: 'info-box', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
