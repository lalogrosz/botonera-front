import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component } from '@angular/core';

@Component({
    selector: 'category-button-dialog',
    templateUrl: './category-button-form.component.html',
  })
  export class CategoryButtonFormComponent {

    constructor(
      public dialogRef: MatDialogRef<CategoryButtonFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
