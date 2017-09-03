import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from '@angular/router';
import { CoreService } from '../../shared/core.service';
import { ConstantsService } from '../../shared/constants.service';
import { LoggerService } from '../../shared/logger.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuizRouteResolveService implements Resolve<any> {
    
    constructor(private coreService: CoreService,
        private constantsService:ConstantsService,
        private logger:LoggerService,
        private activatedRoute:ActivatedRoute
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        let data:any = JSON.parse(route.queryParams['message']);
        return this.coreService.getQuestions(this.constantsService.navState,
            data.class,data.subject,data.lesson,data.topic);
    }

    
}