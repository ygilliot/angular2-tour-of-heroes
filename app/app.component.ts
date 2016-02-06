import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(private _heroService: HeroService) { }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        //this._heroService.getHeroes().then(heroes=> this.heroes = heroes);
        this._heroService.getHeroesSlowly().then(heroes=> this.heroes = heroes);
    }

}