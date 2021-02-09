import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBooksService } from '../../services/api-books.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent  {

  bookId={};

  content:string;

  constructor(private bookService: ApiBooksService,
    private router: ActivatedRoute) { 
      
      this.router.params.subscribe(params => {
        this.bookService.getOneBook(params.id).subscribe(data => {
          this.bookId = data;
        })
      })
      
    }}