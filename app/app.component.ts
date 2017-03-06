import { Page } from "ui/page";
import { Component, OnInit } from "@angular/core";
import { IAppInterface } from './app.interface';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import {AnimationCurve} from "ui/enums";
import * as connectivity from 'connectivity';
import * as permission from 'nativescript-permissions';

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>',
})
export class AppComponent {

  // Your TypeScript logic goes here
 //  title:string = "My Application"
 //  comments:IAppInterface[] = [];
 //  email:string='this@email.com';
 //  password:string='password';
 //  constructor(private appService : AppService, private page:Page, private router:Router){

 //  }

 //  submit():void {
 //    this.router.navigate(["page1"]);
 //    console.log("Clicked");
 //  }
 //  ngOnInit():void {
	// this.page.actionBarHidden = true;
	// this.page.backgroundImage = "~/images/appi.jpg";
	
 // 	console.log("Getting worse ")
 //  	this.appService.getAllData().subscribe(
 //  		comments => this.comments = comments,
 //  		() => console.log("Data Loaded")
 //  	);
 //  }


}
