import {Response} from "@angular/http";
import {Observable} from "rxjs";

export class ResponseExtractor{

    static extractString(res: Response){
        return res.toString();
    }

    static extractJson(res: Response) {
        return res.json();
    }

    static extractPage(res: Response) {
        return res.json().content;
    }

    static handleError(error: any) {
        return Observable.throw(error);
    }

    static extractCallback(res: Response) {
        return res;
    }

}