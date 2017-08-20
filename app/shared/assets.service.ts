import { Injectable } from '@angular/core';

@Injectable()
export class AssestsService {
    //_24dp
    public CHECK_BOX_CHECKED:string = "res://ic_check_box_black";
    public CHECK_BOX_UNCHECKED:string = "res://ic_check_box_outline_blank_black";
    public RADIO_BOX_CHECKED:string = "res://ic_radio_button_checked_black";
    public RADIO_BOX_UNCHECKED:string = "res://ic_radio_button_unchecked_black";
    constructor() { }
}