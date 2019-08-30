import { Injectable, NgZone } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class BroadcastService {

    private _event: Subject<BroadcastEvent>;

    constructor(private zone: NgZone) {
        this._event = new Subject<BroadcastEvent>();
    }

    on<T>(key: string): Observable<T> {
        return this._event.asObservable().filter(event => event.key === key).map(event => <T>event.data);
    }

    broadcast(key: any, data?: any) {
        // this.zone.runOutsideAngular(() => {
        this._event.next(<BroadcastEvent>{ key, data });
        // });
    }

}

export const BRODCAST_KEYS = {
    ADD_VALUE_TO_CART: 'ADD_VALUE_TO_CART',
    DELETE_VALUE_FROM_CART: 'DELETE_VALUE_FROM_CART',
};

export interface BroadcastEvent {
    key: any;
    data?: any;
}
