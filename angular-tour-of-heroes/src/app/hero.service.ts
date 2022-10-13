import { Injectable } from '@angular/core';
import { Hero } from './hero';               // Hero component
import { HEROES } from './mock-heroes';      // Mock data source
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } // service-in-service, MessageService injected into HeroService which is then injected into HeroesComponent
	getHeroes(): Observable<Hero[]> {
		const heroes = of(HEROES);
		this.messageService.add('HeroService: fetched heroes');
		return heroes;
	}
}