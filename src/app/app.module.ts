import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerSocketService } from './service/server-socket.service';
import {ChatService} from "./service/chat.service";

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServerSocketService, ChatService],
  bootstrap: [AppComponent]
})

export class AppModule { }

