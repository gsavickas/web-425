import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {

    this.books = [
      {
        isbn: '123245453',
        title: 'World War Z',
        description: 'Set 10 years after the war for human survival against the zombies',
        numOfPages: 365,
        authors: ['Max Brooks']
      },
      {
        isbn: '123245459',
        title: 'Legends of the Zombie',
        description: 'Legends of the zombies set in the universe of World War Z',
        numOfPages: 420,
        authors: ['Max Brooks']
      },
      {
        isbn: '123245460',
        title: 'Devotion',
        description: 'Life after the zombies',
        numOfPages: 456,
        authors: ['Max Brooks']
      },
      {
        isbn: '123245474',
        title: 'Extinction',
        description: 'The final days of humanity',
        numOfPages: 356,
        authors: ['Max Brooks']
      },
      {
        isbn: '123245482',
        title: 'The Zombie Survival Guide',
        description: 'How to survive the Zombie horde',
        numOfPages: 220,
        authors: ['Max Brooks']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of (this.books)
  }

  getBook(isbn: string): IBook{
    for (let book of this.books){
      if (book.isbn == isbn){
        return book;
      }
    }
    return {} as IBook;
  }
}
