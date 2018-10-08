import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from './http.interceptor';
import {map} from 'rxjs/operators';
import { CategoryButtonModel } from '../models/category-button.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryButtonService {

    audioFileSubject = new Subject();
    audioFileObservable = this.audioFileSubject.asObservable();

    constructor (private http: HttpClient) {

    }

    getCategories() {
        return this.http.get(APIURL + '/category-button').pipe(
            map((data: CategoryButtonModel) => {
                return data;
            })
        );
    }
}
