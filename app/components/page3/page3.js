"use strict";
var core_1 = require("@angular/core");
var app_service_1 = require("../../app.service");
var router_1 = require("nativescript-angular/router");
var Page3Component = (function () {
    function Page3Component(appService, routerExtension) {
        this.appService = appService;
        this.routerExtension = routerExtension;
        this.title = "Detail Page";
    }
    Page3Component.prototype.onBack = function () {
        this.routerExtension.back();
    };
    Page3Component.prototype.ngOnInit = function () {
        this.dataTapped = this.appService.tappedItem;
        console.log("This tapped");
    };
    return Page3Component;
}());
Page3Component = __decorate([
    core_1.Component({
        selector: 'page3',
        templateUrl: './components/page3/page3.html',
        styleUrls: ['./components/page3/page3.css'],
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        router_1.RouterExtensions])
], Page3Component);
exports.Page3Component = Page3Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWdEO0FBQ2hELGlEQUE2QztBQUU3QyxzREFBK0Q7QUFRL0QsSUFBYSxjQUFjO0lBR3ZCLHdCQUFvQixVQUFzQixFQUN0QixlQUFnQztRQURoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUhwRCxVQUFLLEdBQVUsYUFBYSxDQUFBO0lBSzVCLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0UsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRyxPQUFPO1FBQ2xCLFdBQVcsRUFBRywrQkFBK0I7UUFDN0MsU0FBUyxFQUFHLENBQUMsOEJBQThCLENBQUM7S0FDL0MsQ0FBQztxQ0FLa0Msd0JBQVU7UUFDTix5QkFBZ0I7R0FKM0MsY0FBYyxDQWMxQjtBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gJy4uLy4uL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7SUFwcEludGVyZmFjZX0gZnJvbSAnLi4vLi4vYXBwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAncGFnZTMnLFxuICAgIHRlbXBsYXRlVXJsIDogJy4vY29tcG9uZW50cy9wYWdlMy9wYWdlMy5odG1sJyxcbiAgICBzdHlsZVVybHMgOiBbJy4vY29tcG9uZW50cy9wYWdlMy9wYWdlMy5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlM0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB0aXRsZTpzdHJpbmcgPSBcIkRldGFpbCBQYWdlXCJcbiAgICBkYXRhVGFwcGVkOklBcHBJbnRlcmZhY2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOlJvdXRlckV4dGVuc2lvbnMpe1xuXG4gICAgfVxuICAgIG9uQmFjaygpOnZvaWQge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9uLmJhY2soKTtcblx0fVxuICAgIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVRhcHBlZCA9IHRoaXMuYXBwU2VydmljZS50YXBwZWRJdGVtO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgdGFwcGVkXCIpO1xuICAgIH1cbn0iXX0=