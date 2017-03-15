import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http} from "@angular/http";
import {API} from "../shared/api.config";
import {ResponseExtractor} from "../shared/services/helpers/response.helper";
import {ShopItemFormModel} from "../shared/models/ShopItemFormModel";
import {RequestHelper} from "../shared/services/helpers/request.helper";

@Injectable()
export class AdminService{

  private usersUrl = API.ENTRY.ADMIN + "/users";
  private confirmationUrl = API.ENTRY.ADMIN + "/confirm/";
  private addShopItemUrl = API.ENTRY.SHOP + "/add";
  private getShopItemsUrl = API.ENTRY.SHOP + "/items";

  constructor(private http: Http){

  }

  getUsers(): Observable<any> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(this.usersUrl, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  confirmUser(userHash: string): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.confirmationUrl + userHash, null, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  getShopItems(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.getShopItemsUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  addShopItem(form: ShopItemFormModel): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.addShopItemUrl, form, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleError);
  }
}
