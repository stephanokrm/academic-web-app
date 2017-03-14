import {Injectable} from '@angular/core';

@Injectable()
export class StyleService {

    constructor() {
    }

    public setBodyBackgroundColor(color: string): void {
        document.body.style.backgroundColor = color;
    }
}
