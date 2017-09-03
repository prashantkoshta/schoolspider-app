import { Component, OnInit , OnDestroy} from "@angular/core";
import { ActivatedRoute,Router,NavigationExtras } from "@angular/router";
import { RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { ConstantsService } from "../../shared/constants.service";
import { LoggerService } from "../../shared/logger.service";

@Component({
    selector: "ns-topic",
    moduleId: module.id,
    templateUrl: "./topic.component.html",
})
export class TopicComponent implements OnInit , OnDestroy{
    items: object[];
    title:string;

    subData:any;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        public constantsService:ConstantsService,
        private logger:LoggerService
    ) { }

    ngOnInit(): void {
        this.title = "Topics";
        this.subData = this.route.data.subscribe(data => {
            this.items = data['routeData'];
        });
    }

    ngOnDestroy() {
        this.subData.unsubscribe();
    }

    onSelect(args):void{
        var item:any = this.items[args.index];
        let navextras: NavigationExtras = { 
            queryParams:{"message":JSON.stringify(item)}
        };
        this.routerExtensions.navigate(['/quizs'],navextras);
    }


    //[nsRouterLink]="['/quizs',item]" 
    
}
