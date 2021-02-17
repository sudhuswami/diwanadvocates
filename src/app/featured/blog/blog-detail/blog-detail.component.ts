import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestApiServiceService } from '../../../shared/rest-api-service.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogDetailData = <any>[];
  slug: any
  constructor(private apiService: RestApiServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
    });
    console.log(this.slug)
    this.getBlogDetailData();
  }

  ngOnInit(): void {
    $("#main-navbar").addClass("navbar-position");
  }
  getBlogDetailData() {
    this.apiService.getBlogDetailData().subscribe((res) => {
      this.blogDetailData = <any>res[0];

    },
      (error) => {
        console.log(error)
      })
  }
}
