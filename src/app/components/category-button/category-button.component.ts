import { Component, Input, OnInit } from '@angular/core';
import { CategoryButtonService } from '../../services/category-button.service';

@Component({
    selector: 'category-button',
    templateUrl: './category-button.component.html',
    styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {

    data;

    constructor(private service: CategoryButtonService) {}

    ngOnInit() {
        this.service.getCategories().subscribe((data => {
            this.data = data;
        }));
    }

}

