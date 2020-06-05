import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
Definition and export
*/
@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  constructor() {}

  protected userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected sourceInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public setObservableData = (type: string, data: any) => {
    switch(type){
      case 'user':
        this.userInfo.next(data);
        break;
      case 'source':
        this.sourceInfo.next(data);
        break
      default:
      break;
    };
  };

  public storeUserInfo(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // public getUserInfo(): Observable<any> { return this.userInfo };

  public getUserInfo(): any{
     return JSON.parse(localStorage.getItem('user'));
  };

  public storeSourceInfo(source: any): void {
    var sources;
    if (localStorage.getItem('source') === null) {
      sources = [];
    } else {
       sources = JSON.parse(localStorage.getItem('source'));
    }
    //don't add already displayed data
    if(sources.indexOf(source) == -1){
      sources.push(source);
      window.localStorage.setItem("source", JSON.stringify(sources));
    }
  }

  public getSourceInfo(): any{
    return JSON.parse(localStorage.getItem('source'));
  };

  public storeArticleInfo(article: any): void {
    var articles;
    if (localStorage.getItem('article') === null) {
      articles = [];
    } else {
      articles = JSON.parse(localStorage.getItem('article'));
    }
    if(articles.indexOf(article) == -1){
      articles.push(article);
      localStorage.setItem('article', JSON.stringify(articles));
    }

  }

  public getArticleInfo(): any{
    return JSON.parse(localStorage.getItem('article'));
  };
}
