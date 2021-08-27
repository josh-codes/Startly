import { writable } from 'svelte/store';
import * as setup from "./update/update";
const get = async () => {
    const promise = new Promise( (resolve:any, reject:any)=>{
        try{
            if (!window.chrome) {
                reject("Window.chrome is missing...");
            }
            let json;
            window.chrome.storage.sync.get(['key'], (result:any) => {
                json = JSON.parse(result.key == undefined? "{}" : result.key);
                resolve(json);
            });
        } catch {
            reject("Window.chrome is missing...");
        }
    })
    return promise;
}
const createStore =  () => {   
    const { subscribe, set, update } = writable({})
    const store = {
        subscribe,
        update,
        init: async () => {
            const data:any = await get();
            setup.update(data)
            set(data);
        },
    }
    store.init();
    return store
}

export const settings = createStore()

settings.subscribe((data:any) => {
    try{
        window.chrome.storage.sync.set({key: JSON.stringify(data)}, ()=>{})
    } catch {};

})