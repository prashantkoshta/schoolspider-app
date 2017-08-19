import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {Page} from "ui/page"
import {RouterExtensions} from "nativescript-angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { CoreService } from "../../../shared/core.service";
import { ConstantsService } from "../../../shared/constants.service";




@Component({
    selector: "ns-radiooptions",
    moduleId: module.id,
    templateUrl: "./radiooptions.component.html",
})
export class RadioOptionsComponent implements OnInit, OnDestroy {
    item: object;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private page:Page,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private _constantsService:ConstantsService
    ) {
       // this.page.on("navigatedTo",()=>{
           // console.log("NAV again");
           // this.initScreen();
       // });
        this.item = this._constantsService.selectedQuestion;

        
        console.log("ROUTING PARAM : "+this._constantsService.qIndex); 
       Observable.of(this._constantsService.qIndex)
       // .map(v => v)
       // .filter(v => true)
        .subscribe(
            v => { console.log( v) },
            e => { console.log( e ) },
            () => { console.log('complete') }
        );

     }
   
    ngOnInit(): void {
       // this.initScreen();   
       /* this.router.events.subscribe((event) => {
            console.log("event again");
        });*/
    }

    ngOnDestroy(): void {
        console.log("clicked OnDestroy");  
    }

    onPageLoaded():void{
        console.log("clicked onPageLoaded");  
    }
}
