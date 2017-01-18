import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ResponseExtractor} from "./utils/ResponseExtractor";
import {API} from "../api.config";
import {RequestHelper, Header} from "./utils/RequestHelper";

@Injectable()
export class ShopService {
    constructor(private http: Http) {
    }

    private orderUrl = API.URL + "order/"
    private inventoryItemsUrl = API.URL + 'inventory/items';
    private placeOrderUrl = API.URL + 'order/place/';
    private allOrdersUrl = API.URL + 'order/pending';
    private approveOrderUrl = '/approve';

    public getInventoryItems(page: number, pageSize: number): Observable<any> {
        return this.http.get(this.inventoryItemsUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    public getOrders(page: number, pageSize: number): Observable<any> {
        return this.http.get(this.allOrdersUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    public placeOrder(itemId: string): Observable<any> {
        return this.http.post(this.placeOrderUrl + itemId, null, RequestHelper.getBasicRequestOptions())
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleSimpleError);
    }

    public approveOrder(orderId: string): Observable<any> {
        return this.http.post(this.orderUrl  + orderId + this.approveOrderUrl, null, RequestHelper.getBasicRequestOptions())
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleSimpleError);
    }

}