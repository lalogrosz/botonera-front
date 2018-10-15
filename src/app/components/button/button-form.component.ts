import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component } from '@angular/core';

@Component({
    selector: 'button-dialog',
    templateUrl: './button-form.component.html',
  })
  export class ButtonFormComponent {

    constructor(
      public dialogRef: MatDialogRef<ButtonFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    setFile(file) {
        this.data.file = file;
    }
  }
