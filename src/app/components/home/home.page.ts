import { Component} from '@angular/core';
import { ApiBooksService } from '../../services/api-books.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allBooks;

 constructor(private dataService: ApiBooksService) {

  this.dataService.getBooks()
  .subscribe( (data: any) => {
    console.log(data)
    this.allBooks =  data;
  })

}



}