import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router module used for setting up application level route
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
     // routerModule forRoot method to declare the possible routes in application
     RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: ' ', redirectTo: 'home', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'blog/:blogID', component: BlogViewComponent},
      {path: 'create', component: BlogCreateComponent},
      {path: 'edit/:blogID', component: BlogEditComponent},
      {path: '**', component: NotFoundComponent},

  ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }