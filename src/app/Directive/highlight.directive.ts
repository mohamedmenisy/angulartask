import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  constructor(private _element:ElementRef) {
    this.addStyle()
   }
@Input() qun!:number;
  //on changes 
  

  addStyle(){
    this._element.nativeElement.style.border='3px solid red'
    this._element.nativeElement.style.borderRadius='20px'
    this._element.nativeElement.style.boxShadow="10px 5px 5px rgba(0,0,0,0.6)";

  }
  
  @HostListener('mouseover') onMouseOver(){
    this._element.nativeElement.style.border='0px solid transparent'
    this._element.nativeElement.style.boxShadow="none";
    this._element.nativeElement.style.borderRadius='0px'

  }

  @HostListener('mouseout') onMouseOut(){
    this._element.nativeElement.style.border='3px solid red'
    this._element.nativeElement.style.borderRadius='20px'
    this._element.nativeElement.style.boxShadow="10px 5px 5px rgba(0,0,0,0.6)";
   
  }


}
