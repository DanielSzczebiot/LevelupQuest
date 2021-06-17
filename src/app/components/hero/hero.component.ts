import { Component, OnInit, Input } from '@angular/core';
import {HeroService} from '../../services/Hero.service';
import {Hero} from '../../Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
@Input() hero!: Hero;
heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes =  this.heroService.getAttributes()
  }
  

}
