import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { HomeComponent } from './home/home.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ContentComponent } from './content/content.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { BlogComponent } from './blogComponents/blog/blog.component';

import { CreateArticleComponent } from './blogComponents/create-article/create-article.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ViewArticleComponent } from './blogComponents/view-article/view-article.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    HomeComponent,
    SnackbarComponent,
    ContentComponent,
    SolutionsComponent,
    BlogComponent,
    CreateArticleComponent,
    ViewArticleComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [provideClientHydration(), BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
