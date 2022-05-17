import { Component, OnInit } from '@angular/core';
import { Book } from './shared/books';
import { BooksService } from './shared/books.service';

@Component({
  selector: 'lib-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Library';
  books: Book[] = [];
  constructor(private booksservise: BooksService) {}
  ngOnInit(): void {
    this.booksservise.getAll().subscribe((data) => (this.books = data));
  }
  async addBooks() {
    const newBook = await this.booksservise.create({
      title: 'test',
      author: 'majed ahmed',
      pages: 100,
      editon: 2,
    } as Book);
    console.log(newBook);
  }
}
