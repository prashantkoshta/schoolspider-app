import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, RequestOptions, ResponseContentType  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ConstantsService} from "./constants.service";
import { LoggerService } from "./logger.service";


@Injectable()
export class CoreService {
    constructor(private _http:Http, 
        private _constants:ConstantsService,
        private logger:LoggerService,
    ) {
     }

    public getAppDataConfig(){
        var data = {
                    "collection":"appconfig",
                    "querytype":"findone",
                    "query":{
                        "appid" : "schoolspider"
                    }
        };
        return this.getServiceData(data,"/fetchData");
    }


    public getQuestions(doctype:string,clas:string,sub:string,lesson:string,topic:string):Observable<Array<object>> {
        var data = {
            "query":{
                // "_id":"599988de8bd701e99dc129eb"
                "class":clas,
                "subject":sub,
                "lesson":lesson,
                "topic":topic,
                "type":doctype
            },
            "sort":{
               
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "subject":1,
                "lesson":1,
                "topic":1,
                "q":1,
                "options":1,
                "ans":1,
                "qtype" :1,
                "keyboardtype":1
            }
            
        }
        return this.getServiceData(data,"/getData");
    }

    public getPages(doctype:string,clas:string,sub:string,lesson:string):Observable<Array<object>> {
         var data = {
             "query":
             [
                 {
                     "$match":{
                             "class": clas,
                             "subject":sub,
                             "lesson":lesson,
                             "type":doctype
                         }
                 },
                 {
                     "$group":{
                             "_id": "$topic",
                             "id": { "$first": "$_id" },
                             "class": { "$first": "$class" },
                             "class_title": { "$first": "$class_title" },
                             "subject": { "$first": "$subject" },
                             "lesson": { "$first": "$lesson" },
                             "refurls": { "$first": "$refurls" }
                         }
                 },
                 {
                   "$project":{
                       "_id":"$id",
                       "class":"$class",
                       "class_title":"$class_title",
                       "subject":"$subject",
                       "lesson":"$lesson",
                       "refurls":"$refurls"
                       }
                   } ,
                 {
                   "$sort":{
                             "lesson":1
                       }
                   }  
             ]
             
         };
         return this.getServiceData(data,"/getDataAggregate");
     }

    public getTopic(doctype:string,clas:string,sub:string,lesson:string):Observable<Array<object>> {
       /* var data = {
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
            
        }*/
        var data = {
            "query":
            [
                {
                    "$match":{
                            "class": clas,
                            "subject":sub,
                            "lesson":lesson,
                            "type":doctype
                        }
                },
                {
                    "$group":{
                            "_id": "$topic",
                            "id": { "$first": "$_id" },
                            "class": { "$first": "$class" },
                            "class_title": { "$first": "$class_title" },
                            "subject": { "$first": "$subject" },
                            "lesson": { "$first": "$lesson" },
                            "topic": { "$first": "$topic" }
                        }
                },
                {
                  "$project":{
                      "_id":"$id",
                      "class":"$class",
                      "class_title":"$class_title",
                      "subject":"$subject",
                      "lesson":"$lesson",
                      "topic":"$topic"
                      }
                  } ,
                {
                  "$sort":{
                            "topic":1
                      }
                  }  
            ]
            
        };
        return this.getServiceData(data,"/getDataAggregate");
    }

    public getLessons(doctype:string,clas:string,sub:string):Observable<Array<object>> {
        this.logger.log(clas);
        /*var data = {
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
            
        }*/
        var data = {
            "query":
            [
                {
                    "$match":{
                            "class": clas,
                            "subject":sub,
                            "type":doctype
                        }
                },
                {
                    "$group":{
                            "_id": "$lesson",
                            "id": { "$first": "$_id" },
                            "class": { "$first": "$class" },
                            "class_title": { "$first": "$class_title" },
                            "subject": { "$first": "$subject" },
                            "lesson": { "$first": "$lesson" },
                            "topic": { "$first": "$topic" }
                        }
                },
                {
                  "$project":{
                      "_id":"$id",
                      "class":"$class",
                      "class_title":"$class_title",
                      "subject":"$subject",
                      "lesson":"$lesson",
                      "topic":"$topic"
                      }
                  } ,
                {
                  "$sort":{
                            "lesson":1
                      }
                  }  
            ]
            
        };
        return this.getServiceData(data,"/getDataAggregate");
    }

    public getSubjects(doctype:string,clas:string):Observable<Array<object>> {
       /* var data = {
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
            
        }*/
        var data = {
            "query":
            [
                {
                    "$match":{
                            "class": clas,
                            "type":doctype
                        }
                },
                {
                    "$group":{
                            "_id": "$subject",
                            "id": { "$first": "$_id" },
                            "class": { "$first": "$class" },
                            "class_title": { "$first": "$class_title" },
                            "subject": { "$first": "$subject" },
                            "lesson": { "$first": "$lesson" },
                            "topic": { "$first": "$topic" }
                        }
                },
                {
                  "$project":{
                      "_id":"$id",
                      "class":"$class",
                      "class_title":"$class_title",
                      "subject":"$subject",
                      "lesson":"$lesson",
                      "topic":"$topic"
                      }
                  } ,
                {
                  "$sort":{
                            "subject":1
                      }
                  }  
            ]
            
        };
        return this.getServiceData(data,"/getDataAggregate");
    }

    public getClasses(doctype:string):Observable<Array<object>> {
       /* var data = {
            "query":{
                
            },
            "sort":{
                "class":1
            },
            "count":10,
            "fields":{
                "_id":1,
                "class":1,
                "class_title":1
            }
            
        }*/
        var data = {
            "query":
            [
            {
                    "$match":{
                            //"exam_mode": "class test"
                            "type":doctype
                        }
                },
                {
                    "$group":{
                            "_id": "$class",
                            "id": { "$first": "$_id" },
                            "class": { "$first": "$class" },
                            "class_title": { "$first": "$class_title" },
                            "subject": { "$first": "$subject" },
                            "lesson": { "$first": "$lesson" },
                            "topic": { "$first": "$topic" }
                        }
                },
                {
                  "$project":{
                      "_id":"$id",
                      "class":"$class",
                      "class_title":"$class_title",
                      "subject":"$subject",
                      "lesson":"$lesson",
                      "topic":"$topic"
                      }
                  } ,
                {
                  "$sort":{
                            "class":1
                      }
                  }  
            ]
            
        };
        //"/getData"
        return this.getServiceData(data,"/getDataAggregate");
    }

    private getServiceData(param,api:string):Observable<Array<object>>{
        this.logger.log("PARMAS   "+JSON.stringify(param));
        let options:RequestOptions = new RequestOptions({
            method: "post",
            body:param,
            url : this._constants.endpoint+api,
            responseType:ResponseContentType.Json
        });
        return this._http.get(this._constants.endpoint,options)
        .map((response: Response) => <Array<object>> response.json())
        .do(data => { 
            this.logger.log("Results:###########"+JSON.stringify(data));
        })
        .catch(this.handleError);
       /* .do(data => {
           this.logger.log("Results:###########"+JSON.stringify(data))
        });*/
    }

    private handleError(error:Response):Observable<any>{
        this.logger.log("handleError"+error.toString());
        return Observable.throw(error.json().error || 'Server error');
    }
}

