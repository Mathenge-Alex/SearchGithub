import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DateCountPipe } from './date-count.pipe';
import { FeaturingDirective } from './featuring.directive';
import { GithubRepoComponent } from './user-info/github-repo/github-repo.component';
import { GithubUserComponent } from './user-info/github-user/github-user.component';
import { FormNavigtionDirective } from './form-navigtion.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    DateCountPipe,
    FeaturingDirective,
    GithubRepoComponent,
    GithubUserComponent,
    FormNavigtionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
