import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, RequestOptions, ResponseContentType  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ConstantsService} from "./constants.service";

@Injectable()
export class CoreService {
    constructor(private _http:Http, private _constants:ConstantsService) { 
    }

    public getQuestions(clas:string,sub:string,lesson:string,topic:string):Observable<Array<object>> {
        var data = {
            "query":{
                "class":clas,
                "subject":sub,
                "lesson":lesson,
                "topic":topic
            },
            "sort":{
               
            },
            "count":10,
            "fields":{
               
            }
            
        }
        return this.getServiceData(data);
    }

    public getTopic(clas:string,sub:string,lesson:string):Observable<Array<object>> {
        var data = {
            "query":{
                "class":clas,
                "subject":sub,
                "lesson":lesson
            },
            "sort":{
                "topic":1
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "subject":1,
                "lesson":1,
                "topic":1
            }
            
        }
        return this.getServiceData(data);
    }

    public getLessons(clas:string,sub:string):Observable<Array<object>> {
        console.log("\n%%%%%\n",clas);
        var data = {
            "query":{
                "class":clas,
                "subject":sub
            },
            "sort":{
                "lesson":1
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "subject":1,
                "lesson":1
            }
            
        }
        return this.getServiceData(data);
    }

    public getSubjects(clas:string):Observable<Array<object>> {
        var data = {
            "query":{
                "class":clas
            },
            "sort":{
                "subject":1
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "subject":1
            }
            
        }
        return this.getServiceData(data);
    }

    public getClasses():Observable<Array<object>> {
        var data = {
            "query":{
                
            },
            "sort":{
                "class":1
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "class-title":1
            }
            
        }
        return this.getServiceData(data);
    }

    private getServiceData(param):Observable<Array<object>>{
        console.log(JSON.stringify(param));
        let options:RequestOptions = new RequestOptions({
            method: "post",
            body:param,
            url : this._constants.endpoint,
            responseType:ResponseContentType.Json
        });
        return this._http.get(this._constants.endpoint,options)
        .map((response: Response) => <Array<object>> response.json())
        .do(data => {})
        .catch(this.handleError)
        .do(data => console.log("All"+JSON.stringify(data)))
    }

    private handleError(error:Response):Observable<any>{
        console.log("handleError",error.toString());
        return Observable.throw(error.json().error || 'Server error');
    }
}

