import {Component, Input, OnInit} from '@angular/core';
import {song} from "./song";
import {HashService} from "../services/hash.service";
import {AuthService} from "../services/auth.service";
import {SongsService} from "../services/songs.service";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html'
})
export class SongsComponent implements OnInit {

  songs: song[] = [];
  @Input() filterSong?: string = '';

  onTermChange(searchTerm: string){
    this.filterSong = searchTerm;
  }

  constructor(private spotifySongs: SongsService, private hash: HashService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.authenticateUser(this.hash.parseHash());
    this.songs = this.spotifySongs.getSongs();
  }

}
