import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
@Component({
    moduleId: module.id,
    selector: 'events-list',
    template: `<div>
        <h1>Upcomming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event" (eventClick)="handleEventClicked($event)" ></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
    handleEventClicked(data){ 
        console.log('received:', data.name);
        this.toastrService.success(data.name);
    }

    events:any[] = [];

    constructor(private eventService:EventService, private toastrService: ToastrService){ }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
}