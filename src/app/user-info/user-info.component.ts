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
  user: User = []

  constructor(private ApiService: ApiService) { 
    this.ApiService.getInformation().subscribe(
      data => console.log(data)
      )
  }

  ngOnInit(): void {
    
  }

}
