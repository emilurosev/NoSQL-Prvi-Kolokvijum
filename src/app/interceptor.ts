import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        let content = '';

        if(token == null) {
            content = '';
        }
        else {
            content = 'Bearer ' + token;
        }

        console.log('intercepted http req');

        const authReq = req.clone({
            headers: req.headers.set('Authorization', content)
        });

        console.log('sending request with new header now: ', authReq.headers.get('Authorization'));
        return next.handle(authReq);

    }
       
}