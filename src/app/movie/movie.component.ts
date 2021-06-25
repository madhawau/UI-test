import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: any;
  
  totalLength: any;
  page:number = 1;

  constructor(private movieData:DataService) {}
  
  ngOnInit(): void {
    this.movieData.searchText$.subscribe((searchText)=>{
      //console.log("works");
      console.log(searchText);
      this.getMovieData(searchText);      
    })
    
  }

  getMovieData(searchText:string){
    this.movieData.getMovies(searchText).subscribe((result) => {
      console.log(result);
      this.movie = result;

      if (this.movie && this.movie.Search){
        for (let respond of this.movie.Search) {
          respond['classToggle'] = false;

          if (respond.Poster == "N/A") {
              respond.Poster = "/assets/placeholder.jpg" 
          }
        }

        console.log(this.movie.Search);
      }
    })
  }

  
  classToggled = false;

  public toggleField(movie: any) {
    movie.classToggled = !movie.classToggled;  
  }
 
  
}
