import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
    { path: 'Hero-Component', component: HeroComponent },
    { path: 'Map-Component', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
