import {Component, OnInit} from '@angular/core';
import {cols, bodyData} from '../../table-data';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    cols: any[] = [];
    data: any[] = [];
    pageOfItems: any[] = [];
    page: number;
    pageSize: number; // the number of items displayed on each page (defaults to 10)
    collectionSize: number;

    // items: number; // - the array of items to be paged : this.data
    //  - a callback function for handling the changePage event
    // There are also a few optional properties:
    maxPages: number; //  - the max number of page links to display in the pagination nav (defaults to 10)
    initialPage: number; //  - the initial page to display (defaults to 1)

    constructor() {
    }

    ngOnInit() {
        this.cols = cols;
        this.data = bodyData.data;
        this.pageSize = this.data.length / 2;
        this.page = 1;
        console.log('Cols: ', this.cols);
        console.log('Data: ', this.data);
        console.log('pageSize: ', this.pageSize);
    }

    onchangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }

}
