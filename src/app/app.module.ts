import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitUsersComponent } from './components/git-users/git-users.component';
import { GitDataService } from './services/git-data.service';
import { HttpClientModule } from '@angular/common/http'; 
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserRepoComponent } from './components/user-repo/user-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUsersComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [GitDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
