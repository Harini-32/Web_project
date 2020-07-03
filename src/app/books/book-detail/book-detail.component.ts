import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooksService } from "../services/books.service";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
  public book: any;
  public classifyData = null;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private httpClient: HttpClient,
    
  ) 
  {}

  public result;
  public bookdata;
  

  ngOnInit() {
    this.route.params.subscribe((param) => {
      const id = param["id"];
      this.bookService.getBook(id).subscribe((data) => {
        console.log(data);
        const bookdata = data["volumeInfo"];
        this.bookdata = data["volumeInfo"];
        console.log(this.bookdata);
        console.log(bookdata);
        
        this.book = {
          title: bookdata["title"],
          desc: bookdata["description"],
          publisher: bookdata["publisher"],
          authors: bookdata["authors"],
          publishedDate: bookdata["publishedDate"],
          image: bookdata["imageLinks"]["medium"],
          categories: bookdata["categories"],
          previewLink: bookdata["previewLink"],
        };
        
      });
     
    });
  } 
 
  
  classifyCheck(){
    console.log('hey');
    this.httpClient.get('https://cors-anywhere.herokuapp.com/'+ 'https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=YGzIEYAJW6Q4&text=' + this.bookdata.description)
.subscribe(data => {
 
    this.classifyData = data;
    
    console.log('hey');
    console.log(this.classifyData);

    // @ts-ignore
    if (data.negative < data.positive) {
        this.result = 'Good';
        // @ts-ignore
        this.progress = data.positive;
    }
    // @ts-ignore
    if (data.negative > data.positive) {
        this.result = 'Negative';
        // @ts-ignore
        this.progress = data.negative;
    }
    console.log(data);
});
}

}

