import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    template: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private router: Router, private HeroService: HeroService) {

    }

    ngOnInit(): void {
        this.HeroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}