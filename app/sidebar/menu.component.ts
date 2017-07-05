import { Component, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DataService } from '../services/data.service';
import { MenuItem } from '../models/menuitem-model';


@Component({
    selector: 'menu',
    templateUrl: './app/sidebar/menu.html'
})

export class MenuComponent {

    private menuItems: Array<MenuItem> = new Array<MenuItem>();

    constructor(private dataService: DataService) {

        this.dataService.allLinks.subscribe(items => {
            this.menuItems = items;
        })
    }


}