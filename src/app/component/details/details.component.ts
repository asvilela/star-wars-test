import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Person } from './../../models/person.model';
import { SwapiService } from './../../services/swapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  person: Person = new Person();
  residents: any[] = [];
  inscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private swapi: SwapiService
  ) { }

  ngOnInit() {

    let filter, id;

    this.inscription = this.route.params.subscribe((params: any) => {

      // Load Params
      id = params['id'];

      // Get Person Details
      filter = '/' + id + '/';

      this.swapi.getPeople(filter)
      .subscribe(res => {
        this.person = res as Person;

        // Get people at the same planet
        filter = '/' + this.person.homeworld.split('/')[5] + '/';

        this.swapi.getResidents(filter)
          .subscribe(res => {
            this.residents = res['residents'].map(x => {
              return { id: x.split('/')[5], url: x }
            });

          })
      });
      
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
