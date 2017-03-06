"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.onTap = function () {
        this.router.navigate(["page2"]);
    };
    return Page1Component;
}());
Page1Component = __decorate([
    core_1.Component({
        selector: "page1",
        templateUrl: "./page1.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Page1Component);
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLDBDQUF1QztBQU12QyxJQUFhLGNBQWM7SUFFdkIsd0JBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXpDLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksY0FBYztJQUoxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FHcUMsZUFBTTtHQUZoQyxjQUFjLENBVTFCO0FBVlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwYWdlMVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZTEuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCB7XG4gXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiBcbiAgICB9XG4gXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwYWdlMlwiXSk7XG4gICAgfVxuIFxufSJdfQ==