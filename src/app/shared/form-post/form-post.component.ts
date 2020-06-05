import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ObservablesService } from 'src/app/services/observable/observable.service';
import { ApiService } from '../../services/api/api.service';
import { Subject } from 'rxjs';
import { Article } from 'src/app/models/news/article';
import { debounceTime, distinctUntilChanged, switchMapTo, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styles: []
})
export class FormPostComponent implements OnInit {
  public formData: FormGroup;
  public userData: any;
  public keyword: string;
  @Input() articles: Array<Article> = new Array<Article>();
  private keywordArticle = new Subject<string>();
  form: FormGroup;
  @Input() post: any;
  @Output() art = new EventEmitter<any>();
  @Input() sources: Array<any>;
  @Input() sourceSave: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private observablesService: ObservablesService,
    private apiService: ApiService

  ) {}
  /*public searchForm = () => {
  };*/
  searchPosts(keyword: string) {
    this.keywordArticle.next(keyword);
  }


  ngOnInit(): void {
    this.initForm();
    this.userData = this.observablesService.getUserInfo();
    this.sources = this.observablesService.getSourceInfo();

  }

  get f() {
    return this.form.controls;
  }
  search() {
    //debugger;

    const keyword = this.form.controls.keyword.value;
    const source = this.form.controls.source.value;

    this.art.emit({
      keyword: keyword,
      source: source
    });

  }
  sourceFavorite() {
    console.log("add source", this.form.controls.source.value);
    const sourceInfo: string = this.form.controls.source.value;
    this.observablesService.storeSourceInfo(sourceInfo);
  }
  private initForm() {

    const target = {
         keyword: [null, []],
         source: [null, []]
    }
    this.form = this.formBuilder.group(target);
  }
}
