import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    //moduleId: module.id,
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div>
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
    </div>`,
    styles:[`
        .thumbnail { min-height: 210px}
        .well div { color: #bbb }
        .pad-left{ padding-left: 10px; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClickMe(){ this.eventClick.emit(this.event); }

    getStartTimeStyle(){

    }
}