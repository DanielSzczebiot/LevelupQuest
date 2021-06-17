import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.service';
import { QuestService } from 'src/app/services/quest.service';
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
  constructor(private heroService:HeroService, private questService: QuestService) { }

  ngOnInit(): void {
    this.heroService.getAttributes().subscribe((heroes) => (this.heroes = heroes));
    
    this.questService.getQuests().subscribe((quests) => (this.quests = quests));

}
}
