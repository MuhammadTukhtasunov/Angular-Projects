import { Component, OnInit } from '@angular/core';

// Importing hero interface from app.ts
import { Hero } from '../hero';

// Import mock HEROES for displaying
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	// Adding a "hero proerty"
	// hero = 'Windstorm'; -> Hero was just a name
	// Now it's based off Hero.ts hero interface:
	// hero: Hero = {
	// 	id: 1,
	// 	name: 'Windstorm'
	// };

  // When clicked
	selectedHero?: Hero;
	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}

  // Exposing HEROES array for binding
	heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}