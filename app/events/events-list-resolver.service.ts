import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
@Injectable()
export class EventListResolver implements Resolve<any> {
    resolve(){
        return this.eventService.getEvents().map(event => event)//return the observable the subscribe returns the subscription
    }
    constructor( private eventService: EventService ) { }
}