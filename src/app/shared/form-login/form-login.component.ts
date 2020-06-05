import { Component, OnInit, EventEmitter, Output , OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from 'src/app/services/observable/observable.service';
import { Router } from '@angular/router';

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
        private router: Router

    ) {}

    // Method to reset form
    private resetForm = ()  => {
        this.formData = this.FormBuilder.group({
            email: [ null, Validators.required ],
           // password: [ null, Validators.required ]
        });
    };

    //form to login
    public loginForm = async () => {
      debugger;
      const email: string = this.formData.value.email;
      const userInfo = await this.CrudService.readOneItem('users', `email=${email}`);

      if (userInfo.length > 0) {
        this.observablesService.storeUserInfo(userInfo[0]);
        //location.reload();
        this.router.navigateByUrl('/connected').then(() => {
          window.location.reload();
        });
      }


    }
    // Start
    ngOnInit() {
        this.resetForm();
        this.userData = this.observablesService.getUserInfo();
    }
    ngOnChanges(changes){

    };
}
