import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  data:Array<{name: string, username: string, email: string}> = [];

  constructor(private user: UsersService) {
    this.user.getData().subscribe((data:any) => {
      console.log(data);
      this.data = data;
    });
  }
}
