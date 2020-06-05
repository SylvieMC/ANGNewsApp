// Imports
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Inner
import { CrudService } from "./services/crud/crud.service";

// Definition
@Injectable({ providedIn: 'root' })

// Export
export class AuthGuard implements CanActivate {

    constructor(
        private CrudService: CrudService,
        private Router: Router,
    ){}


     canActivate(): Promise<any> {
       return new Promise( (resolve, reject) => {

          if (localStorage.getItem('user') == null) {
            resolve(false);
          }
          const user = JSON.parse(localStorage.getItem('user'));
            this.CrudService.readOneItem('users', user.email)
            .then( ( apiResponse ) =>  {console.log(" apiresponse", apiResponse.length);
               if(apiResponse.length > 0){ resolve(true); }
                else{ this.Router.navigateByUrl('/home'); };
            })
            .catch( ( apiResponse ) =>  this.Router.navigateByUrl('/home'))
        })
    }
}
