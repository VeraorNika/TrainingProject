import { Component } from "@angular/core";
import { HeroInterface } from "./Hero.interface";

@Component({
  selector: 'example-parent',
  templateUrl: './example-parent.component.html',
  styleUrls: ['./example-parent.component.less'],

})
export class ExampleParentComponent {

  name ="User";
  hero: HeroInterface = {
    name: "John",
    country: "USA"
  }

  changeHero(): void {
    this.hero = {
      name: "New Name",
      country: "New Country"
    }
  }

  changeHeroName(name: string): void {

    this.hero.name=name;
  }
  constructor() {
  }

  writeToConsoleClickEvent($event: any) {
    console.log($event);
  }

  writeToConsoleBlurEvent($event: any) {
    console.log($event);
  }
}
