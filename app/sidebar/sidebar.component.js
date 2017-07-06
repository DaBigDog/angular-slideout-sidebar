"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SidebarComponent = (function () {
    function SidebarComponent(thisElement) {
        this.thisElement = thisElement;
        this.sidebarState = "in"; // in or out
        this.sidebarPosition = "left"; // right or left side
        this.elementRef = thisElement;
    }
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        var location = changes["location"];
        this.sidebarPosition = location.currentValue;
    };
    /** Sidebar event handlers **/
    SidebarComponent.prototype.handleClick = function (event) {
        if (this.sidebarState === "out" && !event.target.classList.contains("no-close-sidebar")) {
            if (event.target.classList.contains("close-sidebar") || !this.elementRef.nativeElement.contains(event.target)) {
                this.toggleSidebar();
            }
        }
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebarState = this.sidebarState === "out" ? "in" : "out";
    };
    Object.defineProperty(SidebarComponent.prototype, "sidebarStateClass", {
        get: function () {
            return this.sidebarPositionClass + "-" + this.sidebarState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "sidebarPositionClass", {
        get: function () {
            return "sidebar-" + this.sidebarPosition;
        },
        enumerable: true,
        configurable: true
    });
    return SidebarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SidebarComponent.prototype, "location", void 0);
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'sidebar',
        templateUrl: './app/sidebar/sidebar.html',
        host: { '(document:click)': 'handleClick($event)' },
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map