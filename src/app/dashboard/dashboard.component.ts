import {Component, OnInit} from '@angular/core';

import {ComicService} from '../comic-issue/comic.service';
import {ComicIssue} from '../comic-issue/ComicIssue';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  comics: ComicIssue [] = [];
  selectedComic: ComicIssue = null;

  constructor(private comicService: ComicService) {
  }

  ngOnInit() {
    this.loadComicIssues();
  }

  loadComicIssues() {
    const tempComics = [];
    const self = this;
    this.comicService.getComics().subscribe(
      result => {
        for (const comicJson of result) {
          const comic = new ComicIssue();
          comic.id = comicJson.id;
          comic.title = comicJson.title;
          comic.description = comicJson.description;
          comic.seriesNumber = comicJson.seriesNumber;
          comic.publicationDate = comicJson.publicationDate;
          comic.publisherId = comicJson.publisherId;
          comic.publisher = comicJson.publisher;
          comic.thumbnail = comicJson.thumbnail;
          comic.images = comicJson.images;

          tempComics.push(comic);
        }
        self.comics = tempComics;
        this.handleSelectedComic(this.comics[0].id); // setting the initial/default selected comic to the first
      },
      error => console.log('error: ', error)
    );
    return tempComics;
  }

  handleSelectedComic(comicId) {
    this.selectedComic = this.comics.filter(comic => comic.id === comicId)[0];
  }
}
