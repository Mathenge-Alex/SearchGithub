import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './userSearch/user.component';
import { RepositoryComponent } from './repositoryData/repository.component';
import { HomeComponent } from './mainView/mainView.component';
import { ColorsDirective } from './hover.directive';
import { FooterComponent } from './footer/footer.component';
import { DayscountPipe } from './timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    RepositoryComponent,
    HomeComponent,
    ColorsDirective,
    FooterComponent,
    DayscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
