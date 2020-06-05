/*
Imports
*/
    // Angular
    import { Routes } from '@angular/router';

    //Inner
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';
    import { AuthGuard } from "./auth.guard";
import { FormLoginComponent } from './shared/form-login/form-login.component';

//

/*
Export
*/
    export const AppRouterModule: Routes = [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: "login",
        component: FormLoginComponent
      },
      {
        path: 'connected',
        component: ConnectedPageComponent,
        //canActivate: [ AuthGuard ]
      }
    ];
//
