"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var Page1Component = (function () {
    function Page1Component(page, router) {
        this.page = page;
        this.router = router;
        this.page.actionBarHidden = true;
    }
    Page1Component.prototype.ngOnInit = function () {
        this.page.className = "loginPage";
    };
    Page1Component.prototype.onTap = function () {
        var navExtras = {
            queryParams: {
                "firstName": "Vikas",
                "lastName": "Sharma G"
            }
        };
        // this.router.navigate(["page2"],navExtras);
        this.router.navigate(["page2"], { clearHistory: true });
    };
    return Page1Component;
}());
Page1Component = __decorate([
    core_1.Component({
        selector: "page1",
        templateUrl: "./components/page1/page1.html",
        styleUrls: ['./login.component.css'],
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.RouterExtensions])
], Page1Component);
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWdEO0FBRWhELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFNL0IsSUFBYSxjQUFjO0lBRXZCLHdCQUEyQixJQUFVLEVBQzNCLE1BQXdCO1FBRFAsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVILGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNRLDhCQUFLLEdBQVo7UUFDQyxJQUFJLFNBQVMsR0FBb0I7WUFDaEMsV0FBVyxFQUFHO2dCQUNiLFdBQVcsRUFBRyxPQUFPO2dCQUNyQixVQUFVLEVBQUUsVUFBVTthQUN0QjtTQUNELENBQUM7UUFDTCw2Q0FBNkM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN2QyxDQUFDO3FDQUdtQyxXQUFJO1FBQ25CLHlCQUFnQjtHQUh6QixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7IFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGFnZTFcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvcGFnZTEvcGFnZTEuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcblx0XHRcdFx0XHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiBcbiBcdG5nT25Jbml0KCk6dm9pZCB7XG4gXHRcdHRoaXMucGFnZS5jbGFzc05hbWUgPSBcImxvZ2luUGFnZVwiO1xuIFx0fVxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICBcdGxldCBuYXZFeHRyYXM6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICBcdFx0cXVlcnlQYXJhbXMgOiB7XG4gICAgXHRcdFx0XCJmaXJzdE5hbWVcIiA6IFwiVmlrYXNcIixcbiAgICBcdFx0XHRcImxhc3ROYW1lXCI6IFwiU2hhcm1hIEdcIlxuICAgIFx0XHR9XG4gICAgXHR9O1xuXHRcdC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCJdLG5hdkV4dHJhcyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCJdLCB7Y2xlYXJIaXN0b3J5OnRydWV9KTtcbiAgICB9XG4gXG59Il19