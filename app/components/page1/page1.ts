import {Component, OnInit} from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page'; 
@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html",
    styleUrls: ['./login.component.css'],
})
export class Page1Component implements OnInit{
 
    public constructor(private page: Page,
						private router: RouterExtensions) {
 		this.page.actionBarHidden = true;
    }
 
 	ngOnInit():void {
 		this.page.className = "loginPage";
 	}
    public onTap() {
    	let navExtras:NavigationExtras = {
    		queryParams : {
    			"firstName" : "Vikas",
    			"lastName": "Sharma G"
    		}
    	};
		// this.router.navigate(["page2"],navExtras);
        this.router.navigate(["page2"], {clearHistory:true});
    }
 
}