import { Injectable } from '@angular/core';

@Injectable()
export class AssestsService {
    //_24dp
    private endpointurl:string = "https://sspider-api.herokuapp.com/assets/";
    public CHECK_BOX_CHECKED:string = "res://ic_check_box_black";
    public CHECK_BOX_UNCHECKED:string = "res://ic_check_box_outline_blank_black";
    public RADIO_BOX_CHECKED:string = "res://ic_radio_button_checked_black";
    public RADIO_BOX_UNCHECKED:string = "res://ic_radio_button_unchecked_black";
    public ICON_HOME:string = "res://ic_home_black_48";
    public ICON_LOGO:string = "res://icon";


    public DYN_ICONS:string;
    constructor() {
        this.DYN_ICONS = this.endpointurl+"ic_home_black_48dp_2x.png";
        
     }
}