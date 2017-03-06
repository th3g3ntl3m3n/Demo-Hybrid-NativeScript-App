"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/comments';
        this.staticUrl = '~./comments.json';
    }
    AppService.prototype.getAllData = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log('This is What All: Data Loading ' + data); });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLHNDQUErQztBQUUvQyxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBQzlCLG1DQUFpQztBQUVqQyxJQUFhLFVBQVU7SUFJdEIsb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHRCLFFBQUcsR0FBVSwrQ0FBK0MsQ0FBQztRQUM3RCxjQUFTLEdBQVcsa0JBQWtCLENBQUM7SUFJL0MsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUMxQixHQUFHLENBQUMsVUFBQyxHQUFjLElBQUssT0FBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDO2FBQ3JELEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUMsSUFBSSxDQUFDLEVBQW5ELENBQW1ELENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtxQ0FLYyxXQUFJO0dBSmxCLFVBQVUsQ0FhdEI7QUFiWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBcHBJbnRlcmZhY2UgfSBmcm9tICcuL2FwcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcblx0cHJpdmF0ZSB1cmw6c3RyaW5nID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cyc7XG5cdHByaXZhdGUgc3RhdGljVXJsOiBzdHJpbmcgPSAnfi4vY29tbWVudHMuanNvbic7XG5cdHRhcHBlZEl0ZW06SUFwcEludGVyZmFjZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cblx0fVxuXG5cdGdldEFsbERhdGEoKTogT2JzZXJ2YWJsZTxJQXBwSW50ZXJmYWNlW10+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybClcblx0XHRcdFx0XHQubWFwKChyZXMgOiBSZXNwb25zZSkgPT4gPElBcHBJbnRlcmZhY2VbXT4gcmVzLmpzb24oKSlcblx0XHRcdFx0XHQuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnVGhpcyBpcyBXaGF0IEFsbDogRGF0YSBMb2FkaW5nICcrZGF0YSkpO1xuXHR9XG59Il19