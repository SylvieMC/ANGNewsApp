/*
Imports
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//

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
  protected articleInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public setObservableData = (type: string, data: any) => {
    switch(type){
      case 'user':
        this.userInfo.next(data);
        break;
      case 'source':
        this.sourceInfo.next(data);
        break;
      case 'article':
        this.articleInfo.next(data);
        break;
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
    sources.push(source);
    localStorage.setItem('source', JSON.stringify(sources));

     /*sources = JSON.parse(localStorage.getItem('source'));
    sources.push(source);
    localStorage.setItem('source', JSON.stringify(sources));*/

    //localStorage.setItem('source', JSON.stringify(source));

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
    articles.push(article);
    localStorage.setItem('article', JSON.stringify(articles));

    /*sources = JSON.parse(localStorage.getItem('source'));
    sources.push(source);
    localStorage.setItem('source', JSON.stringify(sources));*/

    //localStorage.setItem('source', JSON.stringify(source));

  }
  public getArticleInfo(): any{
    return JSON.parse(localStorage.getItem('article'));
  };
}
//
