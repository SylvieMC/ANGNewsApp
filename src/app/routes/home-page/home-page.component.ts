import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { Router } from '@angular/router';
import { ObservablesService } from 'src/app/services/observable/observable.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  postCollection: any;


  constructor(
    private CrudService: CrudService,
    private observablesService: ObservablesService,
    private Router: Router
  ) { }
        // Method to get the post list
  public getPostList = async () => {
    this.postCollection = await this.CrudService.readAllItems('');
  };
  ngOnInit(){
   //this.getUserInfo('Sincere@april.biz');
   this.getPostList();
  };

  public getUserInfo = async (email: String ) => {
    // Get user infos
    const userInfo = await this.CrudService.readOneItem('users', `email=${email}`);


    debugger
    // Check user info
    if(userInfo && userInfo.length > 0){
      this.observablesService.setObservableData('user', userInfo[0]);
      this.observablesService.storeUserInfo(userInfo[0]);
        // Change route endpoint
        this.Router.navigateByUrl('/connected');
    }
};

};
