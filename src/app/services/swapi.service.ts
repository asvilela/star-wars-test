
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { Person } from './../models/person.model';


@Injectable()
export class SwapiService extends BaseService {

  people: Person[] = [];

  constructor(private http: Http) { 
    super();
  }

  public getPeople(filter?: string): Observable<any> {

    let url: string = (filter != null ? 'https://swapi.co/api/people' + filter : 'https://swapi.co/api/people');

    // console.log(url)

    return this.http.get(url, {})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getResidents(filter?: string): Observable<any> {

    let url: string = (filter != null ? 'https://swapi.co/api/planets' + filter : 'https://swapi.co/api/planets');

    console.log(url)

    return this.http.get(url, {})
      .map(this.extractData)
      .catch(this.handleError);
  }

}
