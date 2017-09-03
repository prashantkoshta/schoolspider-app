import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from '@angular/router';
import { CoreService } from '../../shared/core.service';
import { ConstantsService } from '../../shared/constants.service';
import { LoggerService } from '../../shared/logger.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TutorialRouteResolveService implements Resolve<any> {
    
    constructor(private coreService: CoreService,
        private constantsService:ConstantsService,
        private logger:LoggerService,
        private activatedRoute:ActivatedRoute
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        var item = this.constantsService.selectedLessonItem;
        return this.coreService.getPages(
            this.constantsService.navState,
            item.class,
            item.subject,
            item.lesson
         );
    }
    
}