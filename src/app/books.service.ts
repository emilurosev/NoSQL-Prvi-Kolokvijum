import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get("http://localhost:8080/books");
  }

  exportBooks() {
    return this.http.get('http://localhost:8080/exportbooks', {responseType: 'text'});
  }

  importBooks(path: string) {
    return this.http.post('http://localhost:8080/importbooks', path, {responseType: 'text'});
  }

  deleteBooks() {
    return this.http.delete('http://localhost:8080/books', {responseType: 'text'});
  }
}
