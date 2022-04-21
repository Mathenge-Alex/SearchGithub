import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user'
import { Repository } from '../classes/repository'
import { environment } from 'src/environments/environment';

// import { userInfo } from 'os';

const httpPath = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'access_token:' + environment.token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user!: User;
  repos: any = []
  repository!: Repository;
  BASE_URL = "https://api.github.com/users/"

  constructor(private http: HttpClient) { }

    // Get github User
  getUser(keyword: string){
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get(`${this.BASE_URL}${keyword}`, httpPath).subscribe({
        next: (data: any)=>{
          console.log(data)
          this.user = data;
          resolve;
        },
        error: (err: any)=> {
          reject(err);
        },
        complete: () => {
          console.log("Successfully completed")
        }
      });
    });
    return promise
  }


  //  Get github Repository data
  viewSummary(keyword: string) {
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get(`${this.BASE_URL}${keyword}/repositories`, httpPath).subscribe({
        next: (data: any)=>{
          console.log(data)
          this.repos = data;
          resolve;
        },
        error: (err: any)=> {
          reject(err);
        },
        complete: () => {
          console.log("Successfully completed")
        }
      });
    });
    return promise
  }

}
