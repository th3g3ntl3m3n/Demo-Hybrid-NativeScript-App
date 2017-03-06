import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {IAppInterface} from '../../app.interface';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector : 'page3',
    templateUrl : './components/page3/page3.html',
    styleUrls : ['./components/page3/page3.css'],
})

export class Page3Component implements OnInit{
    title:string = "Detail Page"
    dataTapped:IAppInterface;
    constructor(private appService: AppService,
                private routerExtension:RouterExtensions){

    }
    onBack():void {
		this.routerExtension.back();
	}
    ngOnInit():void {
        this.dataTapped = this.appService.tappedItem;
        console.log("This tapped");
    }
}