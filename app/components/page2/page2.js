"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var app_service_1 = require("../../app.service");
var Page2Component = (function () {
    function Page2Component(activatedrouter, routerExtension, appService) {
        this.activatedrouter = activatedrouter;
        this.routerExtension = routerExtension;
        this.appService = appService;
        this.isVisible = false;
        this.listLoaded = false;
        this.comments = [];
        // this.activatedrouter.queryParams.subscribe((params) => {
        // 	this.firstName = params["firstName"],
        // 	this.lastName = params["lastName"]
        // })
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.isVisible = true;
        console.log("ng ONinit intialted....." + this.isVisible);
        this.appService.getAllData().subscribe(function (comments) { return _this.comments = comments; });
        this.isVisible = false;
        this.listLoaded = true;
    };
    Page2Component.prototype.onItemTap = function (args) {
        this.appService.tappedItem = this.comments[args.index];
        this.routerExtension.navigate(['page3']);
    };
    return Page2Component;
}());
Page2Component = __decorate([
    core_1.Component({
        selector: 'page2',
        templateUrl: './components/page2/page2.html',
        styleUrls: ['./components/page2/page2.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.RouterExtensions,
        app_service_1.AppService])
], Page2Component);
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsaURBQStDO0FBTy9DLElBQWEsY0FBYztJQUkxQix3QkFBMkIsZUFBK0IsRUFDN0MsZUFBaUMsRUFDakMsVUFBc0I7UUFGUixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMbkMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTdCLDJEQUEyRDtRQUMzRCx5Q0FBeUM7UUFDekMsc0NBQXNDO1FBQ3RDLEtBQUs7SUFDTixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ3JDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0Qsa0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUMsT0FBTztRQUNoQixXQUFXLEVBQUMsK0JBQStCO1FBQzNDLFNBQVMsRUFBRyxDQUFDLDhCQUE4QixDQUFDO0tBQzVDLENBQUM7cUNBTTJDLHVCQUFjO1FBQzVCLHlCQUFnQjtRQUNyQix3QkFBVTtHQU52QixjQUFjLENBMEIxQjtBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElBcHBJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9hcHAuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J3BhZ2UyJyxcblx0dGVtcGxhdGVVcmw6Jy4vY29tcG9uZW50cy9wYWdlMi9wYWdlMi5odG1sJyxcblx0c3R5bGVVcmxzIDogWycuL2NvbXBvbmVudHMvcGFnZTIvcGFnZTIuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZTJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGlzVmlzaWJsZTpib29sZWFuID0gZmFsc2U7XG5cdGxpc3RMb2FkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXHRjb21tZW50czpJQXBwSW50ZXJmYWNlW10gPSBbXTtcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRcdFx0XHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKXtcblx0XHQvLyB0aGlzLmFjdGl2YXRlZHJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuXHRcdC8vIFx0dGhpcy5maXJzdE5hbWUgPSBwYXJhbXNbXCJmaXJzdE5hbWVcIl0sXG5cdFx0Ly8gXHR0aGlzLmxhc3ROYW1lID0gcGFyYW1zW1wibGFzdE5hbWVcIl1cblx0XHQvLyB9KVxuXHR9XG5cblx0bmdPbkluaXQoKTp2b2lkIHtcblx0XHR0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG5cdFx0Y29uc29sZS5sb2coXCJuZyBPTmluaXQgaW50aWFsdGVkLi4uLi5cIiArIHRoaXMuaXNWaXNpYmxlKTtcblx0XHR0aGlzLmFwcFNlcnZpY2UuZ2V0QWxsRGF0YSgpLnN1YnNjcmliZShcblx0XHRcdGNvbW1lbnRzID0+IHRoaXMuY29tbWVudHMgPSBjb21tZW50c1xuXHRcdCk7XG5cdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcblx0XHR0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuXHR9XG5cdG9uSXRlbVRhcChhcmdzKTp2b2lkIHtcblx0XHR0aGlzLmFwcFNlcnZpY2UudGFwcGVkSXRlbSA9IHRoaXMuY29tbWVudHNbYXJncy5pbmRleF07XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWydwYWdlMyddKTtcblx0fVxufSJdfQ==