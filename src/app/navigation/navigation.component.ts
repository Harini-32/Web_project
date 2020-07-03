import { StoreService } from "./../services/store.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  public loggedIn: any = false;
  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.loggedIn = localStorage.getItem("userId") ? true : false;
    this.storeService.loggedIn.subscribe((data) => {
      console.log(data);
      this.loggedIn = data;
    });
  }
  ngOnChanges() {
    this.loggedIn = localStorage.getItem("userId") ? true : false;
    console.log("Here");
  }
}
