import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BooksComponent } from "./books/books/books.component";
import { BookCatDetailComponent } from "./books/book-cat-detail/book-cat-detail.component";
import { AccountComponent } from "./account/account.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavigationComponent,
    BooksComponent,
    BookCatDetailComponent,
    AccountComponent,
    BookDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
