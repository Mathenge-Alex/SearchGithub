import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { Repos } from 'src/app/classes/repository/repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsrepodataService {
  gottenUserdetails:User;
  gottenReporepodetails:Repos;

  constructor(private http:HttpClient) {
    this.gottenUserdetails=new User(

      "","","","","",0,0
    )
    this. gottenReporepodetails=new Repos(

      "","","","",
    )
   
   }
   //Api request to getting User Details
   fetchUserRequest(ghubUsername: string){
     interface ApiUserResponse{
       name: string,
       login: string,
       avatar_url: string,
       location: string,
       bio: string,
        followers: number,
       following: number,
    

     }
     let userPromise = new Promise<void>((resolve, reject) =>
      this.http
        .get<ApiUserResponse>(
          environment.baseUrl +
            '/' +
            ghubUsername +
            '??access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.gottenUserdetails = response;
            resolve();
            console.log()
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }
  ////Api request to getting Repo Details
  fetchUserRepositoryRequest(ghubUsername: any) {
    // the interface
    interface ApiUserRepositoryResponse {
       name: string,
     html_url: string,
     description: string,
     language?: string;
    }

    let userRepoPromise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiUserRepositoryResponse>(
          environment.baseUrl +
            '/' +
            ghubUsername +
            '/repos?sort=created&direction=desc?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this. gottenReporepodetails = response;
            resolve();
            
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        );
    });
    return userRepoPromise;
  }  
} 

