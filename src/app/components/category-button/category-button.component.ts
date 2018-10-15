import { Component, OnInit } from '@angular/core';
import { CategoryButtonService } from '../../services/category-button.service';
import { MatDialog } from '@angular/material';
import { ButtonFormComponent } from '../button/button-form.component';
import { CategoryButtonModel } from '../../models/category-button.model';
import { ButtonService } from '../../services/button.service';
import { HttpResponse } from '@angular/common/http';
import { ButtonModel } from '../../models/button.model';

@Component({
    selector: 'category-button',
    templateUrl: './category-button.component.html',
    styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {

    data;

    constructor(
        private service: CategoryButtonService,
        private buttonService: ButtonService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.service.getCategories().subscribe((data => {
            this.data = data;
        }));
    }

    newButton(category: CategoryButtonModel): void {
        const dialogRef = this.dialog.open(ButtonFormComponent, {
          width: '250px',
          data: {
            name: '',
            filename: ''
          }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.buttonService.addButton(result.name, result.file, category._id).subscribe(event => {
                    if (event instanceof HttpResponse) {
                        const button = event.body as ButtonModel;
                        category.buttons.push(button);
                    }
                });
            }
        });
      }

}

