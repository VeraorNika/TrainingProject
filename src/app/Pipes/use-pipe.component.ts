import { Component } from "@angular/core";

@Component({
  selector: 'use-pipe',
  templateUrl: './use-pipe.component.html',
  styleUrls: ['./use-pipe.component.less']
})
export class UsePipeComponent {

  fraction: number = 0.5;
  tax: number = 10;
  money: number = 500;
  pi: number = 3.1415926535;

  date: Date = new Date();

  stringForExperiments: string = "String for experiments";
  users: string[] = ["Tom", "Alice", "Sam", "Kate", "Bob"];
  newUser: string ="";

  AddUser(name: string) {
    this.users.push(name);
  }
}
