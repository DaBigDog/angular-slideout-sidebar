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
var data_service_1 = require("../services/data.service");
var MenuComponent = (function () {
    function MenuComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.menuItems = new Array();
        this.dataService.allLinks.subscribe(function (items) {
            _this.menuItems = items;
        });
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: './app/sidebar/menu.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map