    import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/news/article';

    @Component({
        selector: 'app-item-post',
        templateUrl: './item-post.component.html'
    })

    export class ItemPostComponent implements OnInit {

        // Input  data from parent component
        @Input() post: any;
        @Input() articles: Array<Article> = new Array<Article>();

        constructor(){}
        ngOnInit(){

        };
    };

