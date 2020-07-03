import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  private API_URL = "https://www.googleapis.com/books/v1/volumes";
  constructor(private http: HttpClient) {}

  getBookByCategory(catName: string) {
    const url = this.API_URL + "?q=" + catName;
    return this.http.get(url);
  }

  getBook(id) {
    const url = this.API_URL+ "/" +id;
    return this.http.get(url);
  }
}
