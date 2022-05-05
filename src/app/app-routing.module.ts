import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mainView/mainView.component';
import { UserComponent } from './userSearch/user.component';
import { RepositoryComponent } from './repositoryData/repository.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  
  { path: 'user', component: UserComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
