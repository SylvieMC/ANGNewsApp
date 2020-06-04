import { Component, OnInit, EventEmitter, Output , OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from 'src/app/services/observable/observable.service';

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
        private observablesService: ObservablesService
    ) {}

    // Method to reset form
    private resetForm = ()  => {
        this.formData = this.FormBuilder.group({
            email: [ null, Validators.required ],
           // password: [ null, Validators.required ]
        });
    };

    //form to login
    public loginForm = () => {
      this.CrudService.createItem('email', this.formData.value)
      .then( user => console.log(user) )
      .catch( err => console.log(err) )
    };
    // Start
    ngOnInit() {
        this.resetForm();
        this.userData = this.observablesService.getUserInfo();
    }
    ngOnChanges(changes){

    };
}
