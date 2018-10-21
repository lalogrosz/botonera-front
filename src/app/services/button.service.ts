import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { APIURL } from './http.interceptor';
import { map } from 'rxjs/operators';
import { ButtonModel } from '../models/button.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ButtonService {

    audioFileSubject = new Subject();
    audioFileObservable = this.audioFileSubject.asObservable();

    constructor(private http: HttpClient) {

    }

    addButton(data: any, category: string) {

        const formData: FormData = new FormData();
        formData.append('sound', data.file, data.file.name);
        formData.append('name', data.name);
        formData.append('region_start', data.region.start);
        formData.append('region_end', data.region.end);
        formData.append('category_id', category);

        // create a http-post request and pass the form
        // tell it to report the upload progress
        const req = new HttpRequest('POST', APIURL + '/button', formData);

        // send the http-request and subscribe for progress-updates
        return this.http.request(req);
    }
}
