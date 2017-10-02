import { dispatcher } from './../dispatcher';


export function loaddata() {

    let payload = {
        type: "LOAD_DATA"
    }
    dispatcher.dispatch(payload);

}