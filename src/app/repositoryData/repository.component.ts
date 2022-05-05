import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repos } from '../classes/repository/repos';
import { UsrepodataService } from '../services/userRepoData/userRepoData.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @ViewChild('repoForm') repoFormSearch: NgForm
  pro:string;
  repoFound;
  showFound=false;
  GithubUserNotFound = false;
    // captures user input
    searchRepo(){
      this.pro=this.repoFormSearch.value.search;
      this.reposervice.fetchUserRepositoryRequest(this.pro).then(
        (response) => {
          this.repoFound = this.reposervice.gottenReporepodetails;
          this.showFound = true;
      console.log(this.repoFound);
      
      
        },
      (error) => {
        console.log(error);
        this.GithubUserNotFound = true;
      }
    
      );
  
    
  
  
    }

  constructor(private reposervice: UsrepodataService) {}

  ngOnInit(): void {}


}