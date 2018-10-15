import { Action } from '@ngrx/store';
import { ButtonModel } from '../models/button.model';

export enum ActionTypes {
  PLAY = 'Play',
  STOP = 'Stop',
}

export class PlayAction implements Action {
  readonly type = ActionTypes.PLAY;
  constructor(public payload: ButtonModel) {}
}

export class StopAction implements Action {
    readonly type = ActionTypes.STOP;
    constructor(public payload: ButtonModel) {}
  }

export type Actions = PlayAction | StopAction;
