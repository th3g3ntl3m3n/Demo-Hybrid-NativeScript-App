import { Page1Component } from './components/page1/page1';
import { Page2Component } from './components/page2/page2';
import { Page3Component } from './components/page3/page3';
export const appRoutes: any = [
	{path : "", component:Page1Component},
	{path : 'page2' , component:Page2Component},
	{path : 'page3' , component:Page3Component}
];

export const appComponent:any = [
	Page1Component,Page2Component,Page3Component
];