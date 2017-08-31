import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Person } from './../../models/person.model';
import { SwapiService } from './../../services/swapi.service';

declare let alasql

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  form: FormGroup;
  list: Person[] = [];
  pagination: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private swapi: SwapiService
  ) {

    this.form = this.formBuilder.group({
      filter: [null, [Validators.required]],
      text: [null, [Validators.required, Validators.minLength(3)]]
    });

  }

  ngOnInit() {
    this.onSearch(null);
  }

  onClean():void {
    this.form.reset();
    this.onSearch(null);
  }

  onSubmit(): void {
    let filter: string = '/?search=' + this.form.get('text').value;
    this.onSearch(filter);
  }

  applyCssError(field) {
    return {
      'has-error': !this.form.get(field).valid,
      'has-feedback': !this.form.get(field).valid
    }
  }

  onSearch(filter?: string): void {
    this.swapi.getPeople(filter)
      .subscribe((res) => {
        res['results'].map(x => x.id = x.url.split('/')[5] );
        this.pagination = Array.apply(null, {length: Math.ceil(res.count/10)}).map((x,y) => { return y + 1 });    
        this.list = <Person[]>res['results'];
      });
  }

  orderBy(field: string) {
    this.list = alasql('SELECT * FROM ? ORDER BY ' + field, [this.list]);
  }

}
