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

      constructor( private Router: Router, private observablesService: ObservablesService){
          // Get user data observer
     /*     this.ObservablesService.getUserInfo().subscribe( userDataObserver => {

            if(userDataObserver === null) {
              console.log("null", userDataObserver);

               this.userData = null;
            }
           else{
              console.log("not null", userDataObserver);
                if(userDataObserver.length > 0){
                    // Set local storage
                    localStorage.setItem('userEmail', userDataObserver[0].email );

                    // Update userData value
                    this.userData = userDataObserver[0];
                }
                else{
                    this.userData = null
                }
            }
        })*/


      }

  //

  public logout = () => {
    // Delete localstorage
    localStorage.clear();
    this.userData = null;
    this.Router.navigateByUrl('/home');

    // Set user info obserrbale value
   // this.observablesService.setObservableData('users', null)
}
  ngOnInit(){
    this.userData = this.observablesService.getUserInfo();
  };
};
