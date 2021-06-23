import { Component} from '@angular/core';

@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.svg',
  styleUrls: ['./mapsvg.component.css']
})
export class MapsvgComponent{

  fill = "rgb(255, 0, 0)";

  public changeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    this.fill = `rgb(${r}, ${g}, ${b})`;
  }


}
