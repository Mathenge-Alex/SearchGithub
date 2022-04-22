import { Component, OnInit } from '@angular/core';
// import { info } from 'console';
import { User } from '../classes/user';
import { Repository } from '../classes/repository';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  title = "search on Github"

  constructor(public ApiService: ApiService) { 
    this.title = "search on Github"
  }

  ngOnInit(): void {
    this.ApiService.findUser('Mathenge-Alex');
    this.ApiService.searchRepo('Mathenge-Alex');
  
  }
  SearchUser(keyword:string) {
    this.ApiService.searchRepo(keyword);
    this.ApiService.findUser(keyword);
  }

}
