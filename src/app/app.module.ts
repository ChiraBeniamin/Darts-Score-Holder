import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NewGameComponent} from './new-game/new-game.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {BadgeModule} from "primeng/badge";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuModule} from "primeng/menu";
import {TabMenuModule} from "primeng/tabmenu";
import {HomeComponent} from './home/home.component';
import {PlayedGamesComponent} from './played-games/played-games.component';
import {StepsModule} from "primeng/steps";
import { NormalGameComponent } from './new-game/normal-game/normal-game.component';
import { DoublesGameComponent } from './new-game/doubles-game/doubles-game.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import { PlayGameComponent } from './new-game/play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    HomeComponent,
    PlayedGamesComponent,
    NormalGameComponent,
    DoublesGameComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RippleModule,
    StyleClassModule,
    BadgeModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    FormsModule,
    MenuModule,
    TabMenuModule,
    StepsModule,
    MenubarModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
