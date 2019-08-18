import { Directive, ElementRef } from '@angular/core';
import { Quotes } from './quotes';
import { QuoteService } from './quote-service/quote.service'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private elem:ElementRef){ }

  getBestQuote(upvotes){
    for (let quote of Quotes){
      if(quote.upvotes == Math.max(quote.upvotes)){
        return this.elem.nativeElement.style.color='Red';        
      }else{
        return this.elem.nativeElement.style.color='black';
      }
    }
  }



}
