import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { SpinnerService } from "../core/spinner/spinner.service";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public spinnerService: SpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.requestStarted()
        return next.handle(req).pipe(
            delay(3000),
            finalize(() => this.spinnerService.requestEnded())
        );
    }
}