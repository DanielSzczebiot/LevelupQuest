import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from '../Hero';
import {HEROES} from '../mock-heroes'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getAttributes(): Hero[]{
    return HEROES;
  }

}
