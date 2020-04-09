import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bs: BooksService, private _snackBar: MatSnackBar) { }

  books: any = [];
  path: string;

  ngOnInit() {
    this.bs.getBooks().subscribe(res => {
      this.books = res;
    });
  }

  export() {
    this.bs.exportBooks().subscribe(res => {
      setTimeout(() => {
        console.log(res);
        if(res == 'Exported') {
          this.openSnackBar();
        }
      }, 500);    
    });
  }

  import() {
    this.bs.importBooks(this.path).subscribe(res => {
      setTimeout(() => {
        console.log(res);
        if(res == 'Imported') {
          this.openSnackBar2();
          this.ngOnInit();
        }
      }, 500);
    });
  }

  openSnackBar() {
    this._snackBar.open("Table exported to ExportedBooks.xls", "", {
      duration: 2000,
    });
  }

  openSnackBar2() {
    this._snackBar.open("Table imported from " + this.path, "", {
      duration: 2000,
    });
  }

  openSnackBar3() {
    this._snackBar.open("Books collection deleted", "", {
      duration: 2000,
    });
  }

  delete() {
    this.bs.deleteBooks().subscribe(res => {
      setTimeout(() => {
        console.log(res);
        this.ngOnInit();
        this.openSnackBar3();
      }, 500);
    });
  }

}
