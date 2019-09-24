import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBestvotedHighlight]'
})
export class BestvotedHighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor ="brown";
   }

}
