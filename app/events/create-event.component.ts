import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles:[`
    em { float: right; color: #E05c65; padding-left: 10px}
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit{
    isDirty: boolean = true;
    constructor(private router: Router, private eventService: EventService){}
    cancel(){
        this.router.navigate(['/events'])
    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = true
        this.router.navigate(['/events'])        
    }
    ngOnInit(){
        
    }
}