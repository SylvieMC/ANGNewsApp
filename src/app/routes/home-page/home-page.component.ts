import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { Router } from '@angular/router';
import { ObservablesService } from 'src/app/services/observable/observable.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Article } from 'src/app/models/news/article';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  postCollection: any;
  articles: Array<Article>;
 sources: Array<any>;


  constructor(
    private CrudService: CrudService,
    private observablesService: ObservablesService,
    private Router: Router,
    private apiService: ApiService
  ) { }
        // Method to get the post list
  public getPostList = async () => {
    this.postCollection = await this.CrudService.readAllItems('');
  };
  ngOnInit(){
    this.getUserInfo('Sincere@april.biz');

   this.getPostList();

   this.getSources();
  };
  public showNews($event?: any, source?: string){
    const keyword: string = $event?.keyword;
    const sourceKey: string =  source === undefined ? $event.source : source;
    this.apiService.getNews(keyword, sourceKey)
    .subscribe(data=>{
      console.log(data);
      //debugger;
      this.articles = data;
    });
  }

  public getSources(){
    //debugger;
    this.apiService.getSources()
    .subscribe(data=>{
      console.log(data);

      //this.showNews(null, data[0].id);
      //debugger;
      this.sources = data;
    });
  }

  public getUserInfo = async (email: String ) => {
    //debugger;
    // Get user infos
    const userInfo = await this.CrudService.readOneItem('users', `email=${email}`);



    // Check user info
    if(userInfo && userInfo.length > 0){
      this.observablesService.setObservableData('user', userInfo[0]);
      //this.observablesService.storeUserInfo(userInfo[0]);
        // Change route endpoint
        this.Router.navigateByUrl('/connected');
    }
};

};
