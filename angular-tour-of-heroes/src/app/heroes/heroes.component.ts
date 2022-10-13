import { Component, OnInit } from '@angular/core';

// Importing hero interface from app.ts
import { Hero } from '../hero';

// Import mock HEROES for displaying
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	// Adding a "hero property"
	// hero = 'Windstorm'; -> Hero was just a name
	// Now it's based off Hero.ts hero interface:
	/** hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	**/
	
	// When clicked
	selectedHero?: Hero;
	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}

	// Exposing HEROES array for binding
	// heroes = HEROES;

	heroes: Hero[] = [];

	// Methods ------------------------------------------------
	
	// getHeroes Method to retrieve the heroes from the service
	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	  }

	// --------------------------------------------------------
	
	
	// Parameter to define a heroService property and ID's as a HeroService injection site
	// Injected HeroService
	constructor(private heroService: HeroService) {}

	// Sets what to do when initialized
  ngOnInit(): void {
	this.getHeroes();
  }

}