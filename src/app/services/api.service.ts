import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user'
import { Repository } from '../classes/repository'

// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = 'https://api.github.com/users'

  // https://mathenge-alex.github.io/SearchGithub/

  constructor(private http: HttpClient) { }

  getInformation():Observable<any>{
    return this.http.get<any>(this.BASE_URL + '/repositories')
  }

  getProfile(){

  }

  getRepos(){

  }
  viewSummary(){

  }


}
