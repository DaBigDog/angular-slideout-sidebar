import { Component, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'sidebar',
    templateUrl: './app/sidebar/sidebar.html',
    host: { '(document:click)': 'handleClick($event)' },
})

export class SidebarComponent {

    @Input() location: string;

    private sidebarState: string = "in"; // in or out
    private sidebarPosition: string = "left"; // right or left side
    private elementRef: ElementRef;

    constructor(private thisElement: ElementRef) {
        this.elementRef = thisElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        let location: SimpleChange = changes.location;
        this.sidebarPosition = location.currentValue;
    }

    /** Sidebar event handlers **/

    private handleClick(event: any) {

        if (this.sidebarState === "out" && !event.target.classList.contains("no-close-sidebar")) { // don't check unless sidebar out
        if (event.target.classList.contains("close-sidebar") || !this.elementRef.nativeElement.contains(event.target)) {
                this.toggleSidebar();
            }
        }
    }

    private toggleSidebar(): void {
        this.sidebarState = this.sidebarState === "out" ? "in" : "out";
    }


    private get sidebarStateClass(): string {
        return this.sidebarPositionClass + "-" + this.sidebarState;
    }

    private get sidebarPositionClass(): string {
        return "sidebar-" + this.sidebarPosition;
    }

}