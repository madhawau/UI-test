import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movieName:string = '';

  constructor(private router : Router,private movieData:DataService) { }

  ngOnInit(): void {
  }

  redirectToListingPage(){
    this.movieData.setSearchText(this.movieName);
    this.router.navigate(['/search-result']);
  }

}
