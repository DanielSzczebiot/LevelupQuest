import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Hero} from '../../Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroes: Hero[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.heroes =  this.servicesService.getAttributes()
  }
  

}
