import { Component, OnInit, Input } from '@angular/core';
import { QUESTS } from 'src/app/mock-quests';
import { HEROES } from 'src/app/mock-heroes';
import { Quest } from '../../Quest';
import { Hero } from '../..//Hero';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  quests: Quest[] = QUESTS;
  heroes: Hero[] = HEROES;
  @Input() quest!: Quest;
  @Input() hero!: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
