import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { HttpClientModule } from "@angular/common/http";
import { NgsRevealModule } from "ngx-scrollreveal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { ConnectusComponent } from "./components/connectus/connectus.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFound404Component } from "./components/page-not-found404/page-not-found404.component";
import { WebdevComponent } from "./components/webdev/webdev.component";
import { QouteService } from "./service/qoute.service";
import { OurWorkServiceService } from "./service/our-work-service.service";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    ConnectusComponent,
    HomeComponent,
    PageNotFound404Component,
    WebdevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    NgsRevealModule,
    BrowserAnimationsModule
  ],
  providers: [QouteService, OurWorkServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
