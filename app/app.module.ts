import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './route'

import {
    EventsListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventListResolver,
    EventDetailsComponent,
    EventRouteActivatorService,
    EventService,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'

import { EventsAppComponent } from './events-app.component';

import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule, ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent
    ],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService, AuthService, EventRouteActivatorService, { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }, EventListResolver],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("you need to save");
    return true;
}