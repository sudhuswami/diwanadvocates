import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-reject-consent',
  templateUrl: './reject-consent.component.html',
  styleUrls: ['./reject-consent.component.css']
})
export class RejectConsentComponent implements OnInit {

  consentPropertyName = 'diwanadvocates_consent';
  access_site: boolean = false;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.delete(this.consentPropertyName)

  }

}
