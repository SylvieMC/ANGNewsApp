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

  public getNews(query: string = '', source?: string): Observable<Array<Article>> {
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('sources', source);
    params = params.append('apiKey', environment.apiKey);
    return this.httpClient.get<Article>(
      `${environment.api_url}/everything`, {params: params})
      .pipe(
        map(n => n.articles),
      //  map(m =>
       //   m.sort((a, b) => b.publishedAt - a.publishedAt)
      //  )
       takeLast(10)
        );

  }

  public getSources(): Observable<Array<any>> {
    let params = new HttpParams();
    params = params.append('apiKey', environment.apiKey);
    return this.httpClient.get<any>(
      `${environment.api_url}/sources`, {params: params})
      .pipe(
          map(s => s.sources)
      );
  }

}
