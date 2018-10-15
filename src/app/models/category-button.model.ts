import { ButtonModel } from './button.model';

export interface CategoryButtonModel {
    _id?: string;
    name: string;
    order?: number;
    user?: string;
    buttons?: ButtonModel[];
}
