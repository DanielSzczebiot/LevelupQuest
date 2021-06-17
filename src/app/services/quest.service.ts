import { Injectable } from '@angular/core';
import { Quest } from '../Quest';
import { QUESTS } from '../mock-quests';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor() { }

  getQuests(): Quest[]{
    return QUESTS;

  }
}
