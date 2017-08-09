import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { BogapuramComponent } from './bogapuram/bogapuram.component';
import { VijayanagaramComponent } from './vijayanagaram/vijayanagaram.component';
import { VizagComponent } from './vizag/vizag.component';

import { SubrouteComponent } from './subroute/subroute.component';

@NgModule({
  declarations: [
    AppComponent,
    BogapuramComponent,
    VijayanagaramComponent,
    VizagComponent,
    
    SubrouteComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	RouterModule,
	RouterModule.forRoot([
	{
    path: '',
    redirectTo: "/app-vizag",
    pathMatch: 'full'
  },
	
  {path: 'app-bogapuram',component: BogapuramComponent},
  {path: 'app-vijayanagaram',component: VijayanagaramComponent},
  {path: 'app-vizag',component: VizagComponent,
  children: [
  { path: 'app-subroute',component: SubrouteComponent}
  ]
  
  },
  

   ])
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
