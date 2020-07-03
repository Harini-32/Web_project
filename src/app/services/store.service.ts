import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public addedBooks: any = [];
  public apiUrl = "https://web-project--lms.firebaseio.com/";
  public loggedIn = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  addBooksToStorage(book) {
    this.addedBooks = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
    this.addedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(this.addedBooks));
  }

  getBooksAdded() {
    const books = JSON.parse(localStorage.getItem("books"));
    return books;
  }

  deleteBook(index) {
    const books = JSON.parse(localStorage.getItem("books"));
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    return books;
  }

  confirmBooks(books) {
    const token = localStorage.getItem("token");
    const postData = {
      books: books,
      userId: localStorage.getItem("userId"),
    };
    return this.http.post(this.apiUrl + "books.json?", postData);
  }

  getOrders() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    return this.http.get(this.apiUrl + `books.json`);
  }

  setUser() {
    localStorage.getItem("userId")
      ? this.loggedIn.next(true)
      : this.loggedIn.next(false);
  }

  getUser() {
    return this.loggedIn;
  }

  addBooksToFavs(postData) {
    console.log(postData);
    return this.http.post("http://localhost:3000/api/favorites", postData);
  }

  getFavBooks(userId) {
    return this.http.get(`http://localhost:3000/api/${userId}/favorites`);
  }

  deleteFav(favId) {
    return this.http.delete(`http://localhost:3000/api/favorites/${favId}`);
  }
}
