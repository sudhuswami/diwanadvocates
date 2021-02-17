import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {
  slug: any
  constructor(private route: ActivatedRoute,) {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
    });
    console.log(this.slug)
  }

  ngOnInit(): void {
    $("#main-navbar").addClass("navbar-position");

    // $(document).ready(function () {
    //   $('.carousel').owlCarousel({
    //     items: 4,
    //     lazyLoad: true,
    //     loop: true,
    //     margin: 10
    //   });
    // });

  }
}
