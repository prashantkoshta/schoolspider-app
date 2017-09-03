import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from '@angular/router';
import { CoreService } from './core.service';
import { ConstantsService } from './constants.service';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RouteResolveService implements Resolve<any> {
    
    constructor(private coreService: CoreService,
        private constantsService:ConstantsService,
        private logger:LoggerService,
        private activatedRoute:ActivatedRoute
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        var path:string = route.url[0].path;

       if(path == "standards"){
            return this.coreService.getClasses(this.constantsService.navState);
       }else if(path == "subjects"){
            let data:any = JSON.parse(route.queryParams['message']);
            return this.coreService.getSubjects( this.constantsService.navState ,data.class) 
       }else if(path == "lessons"){
            let data:any = JSON.parse(route.queryParams['message']);
            return this.coreService.getLessons( this.constantsService.navState ,data.class,data.subject)
       }else if(path == "topics"){
            let data:any = JSON.parse(route.queryParams['message']);
            return this.coreService.getTopic( this.constantsService.navState ,data.class,data.subject,data.lesson)
        }else if(path == "items"){
            return this.coreService.getAppDataConfig();
        }
    }
    
}