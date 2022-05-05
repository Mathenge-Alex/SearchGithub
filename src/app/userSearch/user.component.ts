  import { Component, OnInit,ViewChild } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { User } from '../classes/user/user';
  import { UsrepodataService } from '../services/userRepoData/userRepoData.service';

  @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  })
  export class UserComponent implements OnInit {
  @ViewChild('userForm') userFormSearch: NgForm
  pro:string;
  userDeets:User;

  // Hidden search card
  showDeets=false;

  // display error mesage
  GithubUserNotFound = false;

  constructor(private userservice: UsrepodataService) {}

  ngOnInit(): void {}


  searchUser(){ // user search entry
    this.pro=this.userFormSearch.value.search;
    this.userservice.fetchUserRequest(this.pro).then( 
      (response) => {
        this.userDeets = this.userservice.gottenUserdetails;
        
        this.showDeets=true;
        },
        (error) => {
          console.log(error);
          this.GithubUserNotFound = true;
        }
      );
    }
  }

