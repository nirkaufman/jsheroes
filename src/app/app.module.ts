import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import { ListComponent } from './list.component';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {


}
