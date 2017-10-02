import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { appModal } from './store/modal/app.modal';
import { appStore } from './store/app.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [appModal, appStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
