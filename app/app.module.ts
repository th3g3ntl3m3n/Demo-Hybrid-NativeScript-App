import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { appRoutes, appComponent } from './app.routing';

@NgModule({
  declarations: [AppComponent, ...appComponent],
  bootstrap: [AppComponent],
  imports: [
  	NativeScriptModule,
  	NativeScriptHttpModule,
  	NativeScriptFormsModule,
  	NativeScriptRouterModule, 
  	NativeScriptRouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AppService],
})
export class AppModule {}
