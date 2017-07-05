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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.loadLinks = function () {
        var x = JSON.parse(this.jsonLinks);
        return x.map(this.toState);
    };
    DataService.prototype.toState = function (r) {
        var s = ({
            id: r.id,
            text: r.text,
            url: r.url
        });
        return s;
    };
    Object.defineProperty(DataService.prototype, "allLinks", {
        get: function () {
            if ("undefined" === typeof this._links) {
                this._links = new BehaviorSubject_1.BehaviorSubject(this.loadLinks());
            }
            return this._links.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "jsonLinks", {
        get: function () {
            return "[\n            {\n                \"id\":0,\n                \"text\": \"Google\",\n                \"url\": \"https://www.google.com/\"\n            },\n            {\n                \"id\":1,\n                \"text\": \"Angular\",\n                \"url\": \"https://angular.io/\"\n            },\n            {\n                \"id\":2,\n                \"text\": \"ESPN\",\n                \"url\": \"http://www.espn.com/\"\n            },\n            {\n                \"id\":3,\n                \"text\": \"Github\",\n                \"url\": \"https://github.com/DaBigDog\"\n            },\n            {\n                \"id\":4,\n                \"text\": \"Hollywood Sign\",\n                \"url\": \"https://hollywoodsign.org/\"\n            },\n            {\n                \"id\":5,\n                \"text\": \"MySwitzerland\",\n                \"url\": \"http://www.myswitzerland.com/en-us/home.html\"\n            }\n        ]";
        },
        enumerable: true,
        configurable: true
    });
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map