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
/*      

        { path: "items", component: ItemsComponent, resolve: { routeData: RouteResolveService }},
        { path: "standards/:navstart", component: StandardComponent, resolve: { routeData: RouteResolveService }},
        { path: "subjects/:navstart/:clas", component: SubjectComponent , resolve: { routeData: RouteResolveService }},
        { path: "lessons/:navstart/:clas/:sub", component: LessonComponent, resolve: { routeData: RouteResolveService } },
        { path: "topics/:navstart/:clas/:sub/:lesson", component: TopicComponent , resolve: { routeData: RouteResolveService }}

        */

       if(path == "standards"){
            return this.coreService.getClasses(this.constantsService.navState);
       }else if(path == "subjects"){
            return this.coreService.getSubjects( this.constantsService.navState ,route.params['clas'])
       }else if(path == "lessons"){
            return this.coreService.getLessons( this.constantsService.navState ,route.params['clas'],route.params['sub'])
       }else if(path == "topics"){
            return this.coreService.getTopic( this.constantsService.navState ,route.params['clas'],route.params['sub'],route.params['lesson'])
        }else if(path == "items"){
            return this.coreService.getAppDataConfig();
        }
    }
    
}