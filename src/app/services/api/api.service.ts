import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, takeLast } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/models/news/article';
import { User } from 'src/app/models/user/user';
import { Login } from 'src/app/models/login/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews(query: string = '', source?: string): Observable<any> {
    console.log("query",query);
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

  public getUser(login: Login): Observable<User> {
    return this.httpClient.post<User>(
      `${environment.api_url}/login`, login);
  }
}
