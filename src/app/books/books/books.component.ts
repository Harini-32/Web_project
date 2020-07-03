import { genres } from "./../genres.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  public genres = genres;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetails(genre) {
    this.router.navigate(["books", genre.key]);
  }
}
