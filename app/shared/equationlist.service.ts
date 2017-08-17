import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, RequestOptions, ResponseContentType  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {FnEqConstantsService} from "./fnconstants.service";
import { IEquationData } from './iequationdata.interface';

@Injectable()
export class EquationListService {
    constructor(private _http:Http, private _urlService:FnEqConstantsService) { 
    }

    getFinEquListData():Observable<Array<IEquationData>> {
        let options:RequestOptions = new RequestOptions({
            method: "get",
            body:{},
            url : this._urlService.fnlistURL,
            responseType:ResponseContentType.Json
        });
        return this._http.get(this._urlService.fnlistURL,options)
        .map((response: Response) => <Array<IEquationData>> response.json())
        .do(data => {})
        .catch(this.handleError);
        // .do(data => console.log("All"+JSON.stringify(data)))
    }

    private handleError(error:Response):Observable<any>{
        console.log("handleError",error.toString());
        return Observable.throw(error.json().error || 'Server error');
    }
}