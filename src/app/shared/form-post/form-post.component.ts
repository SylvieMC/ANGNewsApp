import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ObservablesService } from 'src/app/services/observable/observable.service';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styles: []
})
export class FormPostComponent implements OnInit {
  public formData: FormGroup;
  public userData: any;

  constructor(
    private FormBuilder: FormBuilder,
    private observablesService: ObservablesService,
    private apiService: ApiService
  ) { }
  public searchForm = () => {

  };
  ngOnInit(): void {
  }

}
