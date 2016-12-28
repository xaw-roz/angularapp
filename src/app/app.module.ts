import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login.component";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second.component';
import { FormComponent } from './form/form.component';
import { SliderComponent } from './slider/slider.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstComponent,
    SecondComponent,
    FormComponent,
    SliderComponent,
    FeedCardComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

