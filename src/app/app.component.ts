import { Component, OnInit, OnDestroy } from '@angular/core';

import { loaddata } from './actions/app.actions';
import { appStore } from './store/app.store';

import { streamer } from './streamer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private _languages: Array<Object>;

  constructor(private _store: appStore) {
    this._languages = [];
  }

  ngOnInit() {
    loaddata()
    this.storeSubscriber();
  }

  storeSubscriber() {
    // streamer subscripton
    streamer.streamExposer(this._store.subsModal().newStream(), (data) => {
      this._languages = data;
    }, (err) => {
      console.log('got error', err)
    },
      () => {
        console.log('completed')
      });
  }

  ngOnDestroy() {
    //Unsubcription to prevent memory leaks
    streamer.unsubscribe(this._store.subsModal().newStream());
  }

}
