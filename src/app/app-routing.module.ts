import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablesComponent} from './tables/tables.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'tables',
        component: TablesComponent
    }
];

@NgModule({
    declarations: [
        TablesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
