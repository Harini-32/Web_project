import { AccountComponent } from "./account/account.component";
import { BookCatDetailComponent } from "./books/book-cat-detail/book-cat-detail.component";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books/books.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "books",
    component: BooksComponent,
  },
  {
    path: "account",
    component: AccountComponent,
  },
  {
    path: "books/:id",
    component: BookCatDetailComponent,
  },
  {
    path: "book/:id",
    component: BookDetailComponent,
  },
  {
    path: "about",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: BooksComponent,
  },
  {
    path: "",
    redirectTo: "books",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
