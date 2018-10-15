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
        this.service.audioFileObservable.subscribe((payload: any) => {
            if (payload.command === 'PLAY' && payload.button._id !== this.button._id) {
                this.status = 'STOPPED';
            }
        });
    }

    play() {
        this.service.audioFileSubject.next({
            button: this.button,
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

