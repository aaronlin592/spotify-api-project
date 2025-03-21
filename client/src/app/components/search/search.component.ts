import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [SpotifyService],
    standalone: false
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  searchPerformed:boolean = false;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    if (!this.searchString.trim()) return; // prevents empty searches

    this.resources = [];
    this.spotifyService.searchFor(this.searchCategory, this.searchString)
      .then((results: ResourceData[]) => {
        this.resources = results;
        this.searchPerformed = true;
      })
      .catch((error) => {
        console.error("Error searching Spotify:", error);
      });
  }

  resetSearch() {
    this.searchPerformed = false; // reset searchPerformed when category changes
    this.resources = []; // clear previous results
  }

}
