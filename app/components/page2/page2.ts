import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { IAppInterface } from '../../app.interface';
import { AppService } from '../../app.service';
@Component({
	selector:'page2',
	templateUrl:'./components/page2/page2.html',
	styleUrls : ['./components/page2/page2.css'],
})

export class Page2Component implements OnInit{
	isVisible:boolean = false;
	listLoaded:boolean = false;
	comments:IAppInterface[] = [];
	public constructor(private activatedrouter: ActivatedRoute,
						private routerExtension: RouterExtensions,
						private appService: AppService){
		// this.activatedrouter.queryParams.subscribe((params) => {
		// 	this.firstName = params["firstName"],
		// 	this.lastName = params["lastName"]
		// })
	}

	ngOnInit():void {
		this.isVisible = true;
		console.log("ng ONinit intialted....." + this.isVisible);
		this.appService.getAllData().subscribe(
			comments => this.comments = comments
		);
		this.isVisible = false;
		this.listLoaded = true;
	}
	onItemTap(args):void {
		this.appService.tappedItem = this.comments[args.index];
		this.routerExtension.navigate(['page3']);
	}
}