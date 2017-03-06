"use strict";
var page1_1 = require("./components/page1/page1");
var page2_1 = require("./components/page2/page2");
var page3_1 = require("./components/page3/page3");
exports.appRoutes = [
    { path: "", component: page1_1.Page1Component },
    { path: 'page2', component: page2_1.Page2Component },
    { path: 'page3', component: page3_1.Page3Component }
];
exports.appComponent = [
    page1_1.Page1Component, page2_1.Page2Component, page3_1.Page3Component
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQTBEO0FBQzFELGtEQUEwRDtBQUMxRCxrREFBMEQ7QUFDN0MsUUFBQSxTQUFTLEdBQVE7SUFDN0IsRUFBQyxJQUFJLEVBQUcsRUFBRSxFQUFFLFNBQVMsRUFBQyxzQkFBYyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFHLE9BQU8sRUFBRyxTQUFTLEVBQUMsc0JBQWMsRUFBQztJQUMzQyxFQUFDLElBQUksRUFBRyxPQUFPLEVBQUcsU0FBUyxFQUFDLHNCQUFjLEVBQUM7Q0FDM0MsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFPO0lBQy9CLHNCQUFjLEVBQUMsc0JBQWMsRUFBQyxzQkFBYztDQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZTFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZTEvcGFnZTEnO1xuaW1wb3J0IHsgUGFnZTJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZTIvcGFnZTInO1xuaW1wb3J0IHsgUGFnZTNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZTMvcGFnZTMnO1xuZXhwb3J0IGNvbnN0IGFwcFJvdXRlczogYW55ID0gW1xuXHR7cGF0aCA6IFwiXCIsIGNvbXBvbmVudDpQYWdlMUNvbXBvbmVudH0sXG5cdHtwYXRoIDogJ3BhZ2UyJyAsIGNvbXBvbmVudDpQYWdlMkNvbXBvbmVudH0sXG5cdHtwYXRoIDogJ3BhZ2UzJyAsIGNvbXBvbmVudDpQYWdlM0NvbXBvbmVudH1cbl07XG5cbmV4cG9ydCBjb25zdCBhcHBDb21wb25lbnQ6YW55ID0gW1xuXHRQYWdlMUNvbXBvbmVudCxQYWdlMkNvbXBvbmVudCxQYWdlM0NvbXBvbmVudFxuXTsiXX0=