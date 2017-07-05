import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { MenuItem } from '../models/menuitem-model'

@Injectable()
export class DataService {

    private _links: BehaviorSubject<MenuItem[]>;

    constructor() {

    }



    private loadLinks() : Array<MenuItem> {
        let x: any[] = JSON.parse(this.jsonLinks);
        return x.map(this.toState);
    }

    private toState(r : any) : MenuItem {
        let s : MenuItem = <MenuItem>({
            id: r.id,
            text: r.text,
            url: r.url
        });
        return s;
    }





    public get allLinks() : Observable<MenuItem[]> {
        if ("undefined" === typeof this._links) {
            this._links = new BehaviorSubject<MenuItem[]>(this.loadLinks());
        }
        return this._links.asObservable();
    }


    private get jsonLinks() : string {
        return `[
            {
                "id":0,
                "text": "Google",
                "url": "https://www.google.com/"
            },
            {
                "id":1,
                "text": "Angular",
                "url": "https://angular.io/"
            },
            {
                "id":2,
                "text": "ESPN",
                "url": "http://www.espn.com/"
            },
            {
                "id":3,
                "text": "Github",
                "url": "https://github.com/DaBigDog"
            },
            {
                "id":4,
                "text": "Hollywood Sign",
                "url": "https://hollywoodsign.org/"
            },
            {
                "id":5,
                "text": "MySwitzerland",
                "url": "http://www.myswitzerland.com/en-us/home.html"
            }
        ]`;
    }

}