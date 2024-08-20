import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { BlogComponent } from './blogComponents/blog/blog.component';
import { CreateArticleComponent } from './blogComponents/create-article/create-article.component';
import { ViewArticleComponent } from './blogComponents/view-article/view-article.component';
import { OptionsComponent } from './options/options.component';
import { animation } from '@angular/animations';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: NewUserComponent },
  {
    path: 'content',
    component: ContentComponent,
  },
  { path: 'solutions/:questionId', component: SolutionsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'view/:articleIndex', component: ViewArticleComponent },
  {
    path: 'options',
    component: OptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
