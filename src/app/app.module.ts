import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TablesComponent} from './tables/tables.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// noinspection JSAnnotator


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
