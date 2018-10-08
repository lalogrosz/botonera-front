import { Component } from '@angular/core';
import { CategoryButtonService } from './services/category-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'botonera-front';
  audio = new Audio();

  constructor(public categoryButtonService: CategoryButtonService) {
    this.categoryButtonService.audioFileObservable.subscribe((data: any) => {
      switch (data.command) {
        case 'PLAY':
          this.audio.src = data.soundFile;
          this.audio.load();
          this.audio.play();
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
}
