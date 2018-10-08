import { ButtonModel } from './button.model';

export interface CategoryButtonModel {
    name: string;
    order: number;
    user: string;
    buttons: ButtonModel[];
}
