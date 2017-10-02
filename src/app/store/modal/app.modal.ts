import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import * as Rx from 'rxjs';
import { Observable } from 'rxjs';

import { streamer } from './../../streamer';


@Injectable()
export class appModal {

    _stream1: string;

    constructor(private _http: Http) {
        this._stream1 = streamer.makeStream();
    }

    loadData() {
        this._http.get('./assets/lang.json')
            .map(res => res.json())
            .subscribe(data => {
                if (data) {
                    streamer.emitInStream(this._stream1, data);
                }
            })
    }

    newStream() {
        return this._stream1;
    }

}