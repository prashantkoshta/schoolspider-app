import { Injectable } from "@angular/core";

@Injectable()
export class ConstantsService {
    public endpoint:string = "https://sspider-api.herokuapp.com/spiderapi/getData";
}
