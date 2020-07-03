import { StoreService } from "./../../services/store.service";
import { BooksService } from "./../services/books.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { category } from "./../genres.model";

@Component({
  selector: "app-book-cat-detail",
  templateUrl: "./book-cat-detail.component.html",
  styleUrls: ["./book-cat-detail.component.css"],
})
export class BookCatDetailComponent implements OnInit {
  public bookList: any = [];
  public bookKey: string;
  public loggedIn = false;
  public title: string;
  public showToaster = false;
  constructor(
    private bookService: BooksService,
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.bookKey = param["id"];
      console.log(this.bookKey);
      this.getBooksList();
      this.title = category[this.bookKey];
      console.log(this.title);
    });
    this.loggedIn = localStorage.getItem("userId") ? true : false;
  }

  getBooksList() {
    this.bookService.getBookByCategory(this.bookKey).subscribe((books) => {
      const items = books["items"];
      items.map((e) => {
        const item = e["volumeInfo"];
        const bookObj = {
          id: e["id"],
          title: item["title"],
          subtitle: item["subtitle"],
          image: item["imageLinks"]["thumbnail"],
          authors: item["authors"],
          rating: item["averageRating"],
          categories: item["categories"],
          pubDate: item["publishedDate"],
        };
        this.bookList.push(bookObj);
      });
    });
  }

  addToFavorites(book) {
    const postData = {
      book: { ...book },
      userId: localStorage.getItem("userId"),
    };
    this.storeService.addBooksToFavs(postData).subscribe((res) => {
      if (res["added"]) {
        this.showToaster = true;
        setTimeout(() => {
          this.showToaster = false;
        }, 1000);
      }
    });
  }

  closeToaster() {
    this.showToaster = false;
  }

  goToDetails(book) {
    this.router.navigate(["./book", book.id]);
  }



  
}
