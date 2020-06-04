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
      debugger
        return new Promise( (resolve, reject) => {
          debugger
          const user = JSON.parse(localStorage.getItem('user'));
            this.CrudService.readOneItem('users', `email=${user.email}`)
            .then( ( apiResponse ) =>  {
                if(apiResponse.length > 0){ return resolve(true) }
                else{ this.Router.navigateByUrl('/home') };
            })
            .catch( ( apiResponse ) =>  this.Router.navigateByUrl('/home'))
        })
    }
}
