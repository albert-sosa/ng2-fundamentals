import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { appRoutes } from './route'

import {
    EventsListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventListResolver,
    EventDetailsComponent,
    EventRouteActivatorService,
    EventService,
} from './events/index'

import { EventsAppComponent } from './events-app.component';

import { NavbarComponent }      from './nav/navbar.component';
import { ToastrService }        from './common/toastr.service';
import { Error404Component }    from './errors/404.component';

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