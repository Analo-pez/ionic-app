import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {


  constructor(private http: HttpClient) { }


 getBooks(): any {
    const url = this.http.get('https://jsonplaceholder.typicode.com/posts');

    return url;
  }

  getOneBook(id: number): any {
    const url = this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return url;
  }
}