import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from '../../shared/rest-api-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogListData = <any>[];
  constructor(private apiService: RestApiServiceService) {
    this.getBlogListData();
  }

  ngOnInit(): void {
    $("#main-navbar").addClass("navbar-position");
  }

  getBlogListData() {
    this.apiService.getData().subscribe((res) => {
      console.log(res)
      this.blogListData = <any>res;
    },
      (error) => {
        console.log(error)
      })
  }
}
