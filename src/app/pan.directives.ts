import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
    selector : '[pan]'
})
export class PanDirectives{

constructor(private element:ElementRef){

}


@HostListener('keyup')
panEntered(){

    var value = <string>this.element.nativeElement.value;
    var upperValue = value.toUpperCase(); 
    this.element.nativeElement.value = upperValue;



}

}