import { Injectable } from '@angular/core';
import { dispatcher } from './../dispatcher';

import { appModal } from './modal/app.modal';

@Injectable()
export class appStore {

    constructor(private _modal: appModal) {
        dispatcher.register((action) => {
            switch (action.type) {
                case "LOAD_DATA": {
                    this._modal.loadData();
                    break;
                }
            }
        });
    }

    subsModal() {
        return this._modal;
    }

}