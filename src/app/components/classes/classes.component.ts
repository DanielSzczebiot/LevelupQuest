import { Component, OnInit, Input } from '@angular/core';
import{Hero} from '../../Hero';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  @Input() hero!: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
