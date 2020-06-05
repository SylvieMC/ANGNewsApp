import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, takeLast } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/models/news/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews(query: string = '', source?: string): Observable<any> {

    return this.httpClient.post(
        `${environment.api_url}/news/${source}/${query}`, {
          "news_api_token": "97fccbac2fae46b4a05123f1b5aa016b"
        }).pipe(takeLast(10));
  }

  public getSources(): Observable<Array<any>> {
    let params = new HttpParams();
    params = params.append('apiKey', environment.apiKey);
    return this.httpClient.get<any>(
      `https://newsapi.org/v2/sources`, {params: params})
      .pipe(
          map(s => s.sources)
      );
  }

}
