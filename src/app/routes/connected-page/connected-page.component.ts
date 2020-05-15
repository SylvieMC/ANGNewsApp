/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
//

/*
Component configuration
*/
  @Component({
    selector: 'app-connected-page',
    templateUrl: './connected-page.component.html',
  })
//
/*
Component class definition
*/
  export class ConnectedPageComponent implements OnInit {

    /*
    Declarations
    */
      public postCollection: any;

      constructor(
        private CrudService: CrudService
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
