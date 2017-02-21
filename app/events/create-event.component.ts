import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'selector',
    template: `<h1>New Event</h1>
    <hr/>
    <div>
        <h3>[Create Event Form will gop here]</h3>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>` 
})
export class CreateEventComponent{
    isDirty: boolean = true;
    constructor(private router: Router){}
    cancel(){
        this.router.navigate(['/events']);
    }
}