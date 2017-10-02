/* 
Author: Nabham Bansal
*/

import { Subject } from 'rxjs/Subject';

export default class streamCreater {

    private _streams: Object;
    private _ID: number;
    private _prefix: string;
    private _subcriptionList: Object;

    constructor() {
        this._streams = {};
        this._ID = 0;
        this._prefix = 'ID_';
        this._subcriptionList = {};
    }

    // Initialize new stream and returns unique identifier
    makeStream(): string {
        this._ID++;
        this._streams[this._prefix + this._ID] = new Subject();
        return this._prefix + this._ID;
    }

    // Pass in data to stream
    emitInStream(id, data): void {
        this._streams[id].next(data);
    }

    // Subscription wrapper
    streamExposer(id, dataCallback, errorCallback, completionCallback): void {
        this._subcriptionList[id] = this._streams[id].subscribe(dataCallback, errorCallback, completionCallback);
    }

    // Dropping stream
    unsubscribe(id): void {
        this._subcriptionList[id].unsubscribe();
    }

}