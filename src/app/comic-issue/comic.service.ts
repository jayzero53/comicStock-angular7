import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) {
  }

  getComics(): Observable<any> {
    return this.http.get('https://frontendshowcase.azurewebsites.net/api/Issues/');
  }
}
