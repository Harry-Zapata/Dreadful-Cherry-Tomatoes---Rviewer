import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json")
  }
}
