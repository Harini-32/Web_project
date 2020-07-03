import { Component } from "@angular/core";
import { StoreService } from "./services/store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "library-management-system";

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    console.log("APp file");
  }
}
