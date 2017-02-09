import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id, //???
  selector: 'my-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[];

  constructor(private heroService: HeroService) { }//注入

  ngOnInit():void {
    this.heroService.getHeroes().then(h=>this.heroes = h.slice(1,5))
  }

}