import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/data.service';

import { AppComponent }  from './app.component';
import { SidebarComponent }  from './sidebar/sidebar.component';
import { MenuComponent }  from './sidebar/menu.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SidebarComponent, MenuComponent ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
