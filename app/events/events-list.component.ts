import {Component} from '@angular/core';
import {EventService} from "./shared/event.service";

@Component({
    selector:'events-list',
    template:`
    <div>
        <h1>
            Upcoming Angular 2 Events
        </h1>
        <div class="row">
            <div *ngFor="let currentEvent of events" class="col-md-5">
                <event-thumbnail [event]="currentEvent" (eventClick)="handleEventClick($event)"></event-thumbnail>
            </div>
        </div>
        
    </div>
    `
})
export class EventsListComponent{

    events:any[];

    constructor(private eventService:EventService){

        this.events = this.eventService.getEvents();

    }

    handleEventClick(data){

        alert(data);

    }

}