import { ModuleWithProviders } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './../component/details/details.component';
import { PeopleComponent } from './../component/people/people.component';

const appRoutes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: PeopleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);