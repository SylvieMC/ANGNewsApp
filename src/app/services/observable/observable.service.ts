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

  public setObservableData = (type: string, data: any) => {
    switch(type){
      case 'user':
        this.userInfo.next(data);
        break;
      case 'source':
        this.sourceInfo.next(data);
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
}
//
