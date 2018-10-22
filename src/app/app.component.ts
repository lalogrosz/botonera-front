import { Component, ViewChild } from '@angular/core';
import { CategoryButtonService } from './services/category-button.service';
import { MatDialog, throwToolbarMixedModesError } from '@angular/material';
import { CategoryButtonFormComponent } from './components/category-button/category-button-form.component';
import { CategoryButtonModel } from './models/category-button.model';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { ButtonModel } from './models/button.model';
import { APIURL } from './services/http.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'botonera-front';
  audio = new Audio();

  @ViewChild('categoryButton') categoryButtonEl: CategoryButtonComponent;

  constructor(
    public categoryButtonService: CategoryButtonService,
    private dialog: MatDialog
  ) {
    this.categoryButtonService.audioFileObservable.subscribe((data: any) => {
      const button: ButtonModel = data.button;
      switch (data.command) {
        case 'PLAY':
          this.audio.src = APIURL + '/sounds/' + button.filename + '.mp3';
          this.audio.load();
          this.audio.play();
          this.audio.onended = ((event: Event) => {
            console.log('Finish ' + button.name);
          });
          break;
        case 'PAUSE':
          this.audio.pause();
          break;
        case 'STOP':
          this.audio.pause();
          this.audio.currentTime = 0;
      }
    });
  }
  newCategory(): void {
    const dialogRef = this.dialog.open(CategoryButtonFormComponent, {
      width: '250px',
      data: {
        name: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const category: CategoryButtonModel = {
          name: result,
          order: 99999
        };
        this.categoryButtonService.addCategory(category)
          .subscribe((categoryCreated: CategoryButtonModel) => {
          this.categoryButtonEl.data.push(categoryCreated);
        });
      }
    });
  }
}
