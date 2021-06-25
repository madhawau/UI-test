import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchText = new BehaviorSubject<string>("");
  searchText$ = this.searchText.asObservable();
  

  constructor(private http:HttpClient) {}

  getMovies(searchText:string) {
    let url =`http://www.omdbapi.com/?s=${searchText}&apikey=753b222d`
    return this.http.get(url);
  }

  setSearchText(searchText:string){
    this.searchText.next(searchText);
  }
  
}
