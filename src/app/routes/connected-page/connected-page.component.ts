/*
Import
*/
  // Angular
  import { Component, OnInit, Input } from '@angular/core';

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
  import { ObservablesService } from 'src/app/services/observable/observable.service';
  import { ApiService } from '../../services/api/api.service';

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
    @Input() sources: Array<any>;
    @Input() sourceInfo: Array<any>;

    /*
    Declarations
    */
      public postCollection: any;

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
