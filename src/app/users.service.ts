import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelType } from './users';

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

  getDataModel() {
    const datamodel: ModelType = {
      name: "Stefania",
      id: 10,
      indian: false,
      address: "Italy",
    };

    return datamodel;
  }
}
