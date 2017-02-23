import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    //moduleId: module.id,
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="padleft">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
    </div>`,
    styles:[`
        .thumbnail { min-height: 210px}
        .well div { color: #bbb }
        .padleft{ padding-left: 10px; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClickMe(){ this.eventClick.emit(this.event); }
}