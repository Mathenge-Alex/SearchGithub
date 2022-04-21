import { Component, OnInit } from '@angular/core';
// import { info } from 'console';
import { User } from '../classes/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  title = "search on Github"

  constructor(private ApiService: ApiService) { 
    this.title = "search on Github"
  }

  ngOnInit(): void {
    this.ApiService.getUser('Mathenge-Alex')
    this.ApiService.viewSummary('Mathenge-Alex')
  
  }
  SearchUser(keyword:string) {
    this.ApiService.viewSummary(keyword)
    this.ApiService.getUser(keyword)
  }

}
