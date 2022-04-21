import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {
  ownerName!: any;
  repos:any =[]
  
  

  uName = new FormControl('',Validators.required)

    constructor( public ApiService :ApiService ) {}


  viewSummary(ownerName:string):void{
    this.ApiService.getUser(ownerName).then((repos:any)=>{
    this.repos = repos
  })
  }


  searchRepos(){
    let ownerName = this.uName.value
    this.viewSummary(ownerName)

    return false
    
  }
      
  ngOnInit(): void {


  }
}
