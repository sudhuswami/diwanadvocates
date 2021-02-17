import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diwanadvocates';

  access_site: any;
  consentPropertyName = 'diwanadvocates_consent';

  constructor(private _router: Router, private cookieService: CookieService) {


  }

  ngOnInit() {

    this.init();
  }
  init() {
    // const cookieExists: boolean = this.cookieService.check(this.consentPropertyName);
    const Cokiesvalue: string = this.cookieService.get(this.consentPropertyName);

    if (Cokiesvalue === 'true') {
      this.access_site = 1
    }
    else {
      this.access_site = 0;
    }
  }
  acceptConsent() {
    this.cookieService.set(this.consentPropertyName, 'true');
    const Cokiesvalue: string = this.cookieService.get(this.consentPropertyName);

    this.access_site = 1;
  }
  rejectConsent() {
    const Cokiesvalue: string = this.cookieService.get(this.consentPropertyName);
    this.cookieService.set(this.consentPropertyName, 'false');
    this.access_site = 1;
    this._router.navigate(['/rejectconsent'])


  }

}