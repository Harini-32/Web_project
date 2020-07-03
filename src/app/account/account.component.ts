import { Router } from "@angular/router";
import { StoreService } from "./../services/store.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
  public favorites: any = [];
  public showToaster = false;
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    const userId = localStorage.getItem("userId");
    this.storeService.getFavBooks(userId).subscribe((data: any) => {
      this.favorites = [...data];
      console.log(this.favorites);
    });
  }
  goToDetails(book) {
    this.router.navigate(["./book", book.id]);
  }

  deleteFav(fav) {
    this.storeService.deleteFav(fav["_id"]).subscribe((data) => {
      this.showToaster = true;
      this.getBooks();
    });
  }
  closeToaster() {
    this.showToaster = false;
  }
}
