import { Injectable } from '@angular/core';
import {ResponseExtractor} from "./helpers/response.helper";
import {RequestHelper} from "./helpers/request.helper";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {API} from "../api.config";

@Injectable()
export class ShopService {

  private getShopItemsUrl = API.ENTRY.SHOP + "/items";
  private getAvailableKudosPointsUrl = API.ENTRY.SHOP + "/available";
  private buyShopItemUrl = API.ENTRY.SHOP + "/buy/";
  private ordersUrl = API.ENTRY.ORDERS + "/get/";

  constructor(private http: Http) { }

  getAvailableKudosPoints(): Observable<any> {
    return this.http.get(this.getAvailableKudosPointsUrl, RequestHelper.getBasicRequestOptions())
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  getShopItems(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.getShopItemsUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  buyItem(itemId: string): Observable<any> {
    return this.http.post(this.buyShopItemUrl + itemId, null, RequestHelper.getBasicRequestOptions())
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleSimpleError);
  }

  getUserOrders(id: string, page: number, pageSize: number): Observable<any>{
    return this.http.get(this.ordersUrl + id, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

}
