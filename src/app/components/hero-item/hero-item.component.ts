import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() hero!: Hero;
  heroes: Hero[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
