import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailsComponent } from './component/details/details.component';
import { PeopleComponent } from './component/people/people.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './routing/app.routing';
import { SwapiService } from './services/swapi.service';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
