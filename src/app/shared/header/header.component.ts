import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../../services/observable/observable.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  /*
  Declaration
  */
      // Properties
      public userData: any;

      constructor(
        private Router: Router,
        private observablesService: ObservablesService
      ){ }

  public logout = () => {
    // Delete localstorage
    localStorage.clear();
    this.userData = null;
    this.Router.navigateByUrl('/home');

    // Set user info observabale value
    this.observablesService.setObservableData('users', null)
}
  ngOnInit(){
    this.userData = this.observablesService.getUserInfo();
  };
};
