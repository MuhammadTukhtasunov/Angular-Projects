import { Component, OnInit } from '@angular/core';

// Importing hero interface from app.ts
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	
	// When clicked
	selectedHero?: Hero;

	// Exposing HEROES array for binding
	// heroes = HEROES;
	heroes: Hero[] = [];

	// Methods ------------------------------------------------
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
	  }

	// getHeroes Method to retrieve the heroes from the service
	getHeroes(): void {
		// this.heroes = this.heroService.getHeroes(); // assumed sync
		this.heroService.getHeroes()
				.subscribe(heroes => this.heroes = heroes);
	}

	// --------------------------------------------------------
	
	// Parameter to define a heroService property and ID's as a HeroService injection site
	// Injected HeroService
	// Injected MessageService
	constructor(private heroService: HeroService, private messageService: MessageService) {}

	// Sets what to do when initialized
  ngOnInit(): void {
		this.getHeroes();
  }
}