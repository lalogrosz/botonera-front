import { Component, Input, OnInit } from '@angular/core';
import { ButtonModel } from '../../models/button.model';
import { CategoryButtonService } from '../../services/category-button.service';
import { APIURL } from '../../services/http.interceptor';

@Component({
    selector: 'button-sound',
    templateUrl: './button.component.html'
})
export class ButtonComponent {

    @Input() button: ButtonModel;
    public audio: any;

    status = 'STOPPED';

    constructor(private service: CategoryButtonService) {

    }

    play() {
        this.service.audioFileSubject.next({
            command: 'PLAY',
            soundFile: APIURL + '/sounds/' + this.button.filename
        });
        this.status = 'PLAYED';
    }

    pause() {
        this.service.audioFileSubject.next({
            command: 'PAUSE'
        });
        this.status = 'PAUSED';
    }

    stop() {
        this.service.audioFileSubject.next({
            command: 'STOP'
        });
        this.status = 'STOPPED';
    }
}

