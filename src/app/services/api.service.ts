import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = 'https://mathenge-alex.github.io/SearchGithub/'

  constructor(private http: HttpClient) { }
}
