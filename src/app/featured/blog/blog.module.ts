import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,

  },
  {
    path: ':slug',
    component: BlogDetailComponent,
    pathMatch: "full"
  },


];
@NgModule({
  declarations: [BlogComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
