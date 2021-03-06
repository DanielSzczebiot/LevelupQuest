// Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
// Components

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { QuestComponent } from './components/quest/quest.component';
import { ButtonComponent } from './components/button/button.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
//Servises

import { HeroService } from './services/Hero.service';
import { MapService } from './services/map.service';
import { QuestService } from './services/quest.service';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { MapsvgComponent } from './components/mapsvg/mapsvg.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    QuestComponent,
    ButtonComponent,
    MapComponent,
    HeaderComponent,
    MainbodyComponent,
    HeroItemComponent,
    MapsvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [HeroService, MapService, QuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
