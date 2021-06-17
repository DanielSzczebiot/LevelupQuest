import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quest } from '../Quest';
import { QUESTS } from '../mock-quests';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor() { }

  getQuests(): Observable <Quest[]>{
    const quests = of(QUESTS)
    return quests;

  }

  

}
