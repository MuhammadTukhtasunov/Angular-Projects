import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'; // importing from hero.ts

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
	
	constructor() { }

  ngOnInit(): void {
  }

}