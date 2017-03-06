import { Injectable } from '@angular/core';
import { IAppInterface } from './app.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class AppService {
	private url:string = 'https://jsonplaceholder.typicode.com/comments';
	private staticUrl: string = '~./comments.json';
	tappedItem:IAppInterface;
	constructor(private http: Http) {

	}

	getAllData(): Observable<IAppInterface[]> {
		return this.http.get(this.url)
					.map((res : Response) => <IAppInterface[]> res.json())
					.do(data => console.log('This is What All: Data Loading '+data));
	}
}