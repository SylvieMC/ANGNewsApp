import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CrudService } from "./services/crud/crud.service";
import { ObservablesService } from "./services/observable/observable.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './routes/home-page/home-page.component';

// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { FormLoginComponent } from './shared/form-login/form-login.component';
import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';
import { FormPostComponent } from './shared/form-post/form-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FormLoginComponent,
    ConnectedPageComponent,
    FormPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CrudService, ObservablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
