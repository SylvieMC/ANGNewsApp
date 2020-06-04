/*
Import
*/
    // Angular
    import { Component, OnInit, Input } from '@angular/core';
    import { ApiService } from '../../services/api/api.service';

//

/*
Componant configuration
*/
    @Component({
        selector: 'app-item-post',
        templateUrl: './item-post.component.html'
    })
//


/*
Componant class definition
*/
    export class ItemPostComponent implements OnInit {

        // Input  data from parent component
        @Input() post: any;
        articles: any;

        constructor( private apiService: ApiService){}
        ngOnInit(){
          this.apiService.getNews().subscribe((data)=>{
            console.log(data);
            this.articles = data['articles'];
          });
        };
    };
//
