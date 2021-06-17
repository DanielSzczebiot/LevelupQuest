import { Component, OnInit, Input } from '@angular/core';
import { Quest } from 'src/app/Quest';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit 
{
  @Input() quest!: Quest;
  quests: Quest[] = [];
  constructor(private questservice:QuestService) { }
  

  ngOnInit(): void {
    this.questservice.getQuests().subscribe((quests)=> (this.quests= quests));
  }

}
