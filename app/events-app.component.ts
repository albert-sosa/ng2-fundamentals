import { Component, OnInit } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'events-app',
    template: '<events-list></events-list>'
    //templateUrl: 'events-app.component.html'
})
export class EventsAppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}