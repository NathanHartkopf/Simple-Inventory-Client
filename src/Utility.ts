import { ITEM } from './types/types';

export default class ItemUtil {
    static createItem(item: ITEM) {
    }
    
    static  getItem(id: number) {
        const headers = new Headers()
        headers.append("itemid", `${id}`)
        
        return fetch("http://172.30.1.192/item/get", {
            headers: headers
        })
    }
    
    static updateItem(id: number, item: ITEM) {
    }

    static deleteItem(id: number) {
    }
}