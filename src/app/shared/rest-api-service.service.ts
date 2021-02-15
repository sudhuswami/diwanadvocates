import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://api.ahatechnocrats.com/wp-json/wp/v2/posts?_embed=true&per_page=6&page=1';
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError))
  }

  getBlogDetailData(): Observable<any> {
    const url = 'https://api.ahatechnocrats.com/wp-json/wp/v2/posts?&slug=hire-magento-developers-create-brilliant-ecommerce-websites';

    return this.http.get<any>(url).pipe(catchError(this.handleError))
  }
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
