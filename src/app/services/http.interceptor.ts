import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import {
    Observable
} from 'rxjs';
import { Injectable, Injector } from '@angular/core';

export const APIURL = 'http://10.10.99.22:3000';

@Injectable()
export class HttpLogInterceptor implements HttpInterceptor {

    constructor(
        private inj: Injector
    ) {
    }

    intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

        const customReq = request.clone({
            setHeaders: {
                Username: `alan`
            }
        });

        return next
            .handle(customReq);

    }


}
