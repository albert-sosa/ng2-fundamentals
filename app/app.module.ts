import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { appRoutes } from './route'

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, EventDetailsComponent, NavbarComponent, CreateEventComponent, Error404Component],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService, EventRouteActivatorService, { provide:'canDeactivateCreateEvent', useValue: checkDirtyState },EventListResolver],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
    if (component.isDirty)
        return window.confirm("you need to save");
    return true;
}