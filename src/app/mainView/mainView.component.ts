import { Component, OnInit } from '@angular/core';
import { UsrepodataService } from '../services/userRepoData/userRepoData.service';
import { User } from '../classes/user/user';
import { Repos } from '../classes/repository/repos';

@Component({
  selector: 'app-home',
  templateUrl: './mainView.component.html',
  styleUrls: ['./mainView.component.css']
})
export class HomeComponent implements OnInit {

  userInfo !: User 
userRepositories!: Repos;
  constructor(private usrepodataService: UsrepodataService) {}

  ngOnInit(): void {
    this.getUserInfo('Mathenge-Alex');
    this.getRepoInfo('Mathenge-Alex');
  }

  // Api Request subscription for user details
  getUserInfo(ghubUsername: any) {
    this.usrepodataService.fetchUserRequest(ghubUsername).then(
      (response) => {
        this.userInfo = this.usrepodataService.gottenUserdetails;
        console.log(this.userInfo);
      },
      (error) => {
        console.log(error);
      }
    
    );
  } 
    
    // Api Request subscription for repo details
    getRepoInfo(ghubUsername: any) {
      this.usrepodataService.fetchUserRepositoryRequest(ghubUsername).then(
        (response) => {
          this. userRepositories= this.usrepodataService. gottenReporepodetails;
          console.log(this.userRepositories);
        },
        (error) => {
          console.log(error);
        }
      );
    }
}


