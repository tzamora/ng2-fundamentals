import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <h2>price: \${{event?.price}}</h2>
            <h2>date: {{event?.date}}</h2>
            
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                <span>{{event?.time}}</span>
                <span *ngSwitchCase="'8:00 am'">early</span>
                <span *ngSwitchCase="'10:00 am'">late</span>
                <span *ngSwitchDefault>normal</span>
            </div>
            
            <div *ngIf="event?.location">
                <span> location:  </span>
                <span class="pad-left"> {{event?.location.country}}  </span>
            </div>
            <button class="btn btn-primary" (click)="clickHandler()">Perro</button>
        </div>
        <div [hidden]="!event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    `,
    styles:[`
        .pad-left { margin-left: 10px; }
        .well div { color: #bd362f }
        .green {color:green;}
        .bold {font-weight: bold;}
    `]
})
export class EventThumbnailComponent {

    @Input() event:any;
    @Output() eventClick = new EventEmitter();

    getStartTimeClass(){

        const isEarlyStart = this.event && this.event.time === '10:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}

    }

    clickHandler(){
        this.eventClick.emit('foo');
    }

}