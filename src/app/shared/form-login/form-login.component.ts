import { Component, OnInit, EventEmitter, Output , OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from 'src/app/services/observable/observable.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})

export class FormLoginComponent implements OnInit, OnChanges {

  //@Output() formSubmit = new EventEmitter();

    // Declarations
    public formData: FormGroup;
    public userData: any;

    // Inject FormBuilder
    constructor(
        private FormBuilder: FormBuilder,
        private CrudService: CrudService,
        private observablesService: ObservablesService,
        private router: Router,
        private apiService: ApiService

    ) {}

    // Method to reset form
    private resetForm = ()  => {
        this.formData = this.FormBuilder.group({
            email: [ null, Validators.required ],
            password: [ null, Validators.required ]
        });
    };

    //form to login
    public loginForm = async () => {
      const email: string = this.formData.value.email;
      const password: string = this.formData.value.password;

      this.apiService.getUser({
        email: email,
        password: password
      }).subscribe( data=> {
        this.observablesService.storeUserInfo(data);
        this.router.navigateByUrl('/connected').then(() => {
          window.location.reload();
        });
      })
    }
    // Start
    ngOnInit() {
        this.resetForm();
        this.userData = this.observablesService.getUserInfo();
    }
    ngOnChanges(changes){

    };
}
