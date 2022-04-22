import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  users:any= []
  user!: User;
  

  name = new FormControl('',Validators.required)

    constructor( public ApiService :ApiService ) {}

  getUser(ownerName: string):void{
  this.ApiService.findUser(ownerName).then ((users:any)=>{

  this.user = new User(this.user.avatar_url, this.user.name, this.user.html_url, this.user.bio, this.user.login, this.user.following, this.user.followers, )
  console.log(this.user)
  })
    }

  findUsers(){
    let ownerName =this.name.value
    this.getUser(ownerName)
    return false
  }

  ngOnInit(): void {
  }

}
