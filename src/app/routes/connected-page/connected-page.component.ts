/*
Import
*/
  import { Component, OnInit, Input } from '@angular/core';
  import { CrudService } from "../../services/crud/crud.service";
  import { ObservablesService } from 'src/app/services/observable/observable.service';
  import { ApiService } from '../../services/api/api.service';

  @Component({
    selector: 'app-connected-page',
    templateUrl: './connected-page.component.html',
  })

/*
Component class definition
*/
  export class ConnectedPageComponent implements OnInit {


    /*
    Declarations
    */
      public postCollection: any;
    /*
    Constructor
    */
      constructor(
        private CrudService: CrudService,
        private observablesService: ObservablesService,
        private apiService: ApiService

      ){}
    //


    /*
    Methods
    */
        // Method to get the post list
        public getPostList = async () => {
          this.postCollection = await this.CrudService.readAllItems('');
        };
    //
    get source(): any {
      var source_json = localStorage.getItem('source');
      var source_list = JSON.parse(source_json);
      return source_list;
    }
    get article(): any {
      var article_json = localStorage.getItem('article');
      var article_list = JSON.parse(article_json);
      return article_list;
    }
    /*
    Hooks
    */
      ngOnInit(){
        // Get the poost list
        this.getPostList();
      };
    //
  };
//
