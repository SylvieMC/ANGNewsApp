/*
Imports
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObservablesService } from "../observable/observable.service";

//

/*
Definition & export
*/
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  /*
  Déclarations
  */
  constructor(
    private HttpClient: HttpClient,
    private ObservablesService: ObservablesService
  ){};
  //


  /*
  Methods CRUD
  */
// Get the API response


    // CRUD method: create item
    public createItem(endpoint: String,data: any): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // Launch request
      return this.HttpClient.post(`https://jsonplaceholder.typicode.com/posts`, data, { headers: myHeader })
      .toPromise().then(tdata => this.getData(endpoint,data)).catch(this.handleError);
    }

  // CRUD method: edit an item
  public updateItem(endpoint: String, _id: String, data: any): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');

  // Launch request
  return this.HttpClient.put(`https://jsonplaceholder.typicode.com/posts/${_id}`, data, { headers: myHeader })
  .toPromise().then(data => this.getData(endpoint,data)).catch(this.handleError);
  };

  // CRUD method: delete an item
  public deleteItem(endpoint: String,_id: String): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/posts/${_id}`, { headers: myHeader })
    .toPromise().then( data => this.getData(endpoint,data))
    .catch(this.handleError);
  };

  public readOneItem(endpoint: String, _id: String): Promise<any>{
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/${endpoint}?${_id}`).toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };
  public readAllItems(endpoint: String): Promise<any>{
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .toPromise().then( data => this.getData(endpoint,data) ).catch(this.handleError);
  };

private getData = (endpoint: String = '', apiResponse: any) => {
  // Switch endpoint to set observable value
  switch(endpoint){
  case 'users':
      // Set user info obserrbale value
      this.ObservablesService.setObservableData('user',apiResponse.data)

      // Return data
      return apiResponse || {};
      break;
  default:
      // Retun data anytime
      return apiResponse || {};
      break;
  };
};
;// Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);
}
//
