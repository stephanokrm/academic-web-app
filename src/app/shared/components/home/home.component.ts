import {Component} from '@angular/core';
import {StyleService} from '../../../shared/services/style.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private white: string = '#FFFFFF';

    public constructor(private styleService: StyleService) {
        this.styleService.setBodyBackgroundColor(this.white);
    }
}
