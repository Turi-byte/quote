import { Directive, ElementRef } from '@angular/core';
import { Quotes } from './quotes';
import { QuoteService } from './quote-service/quote.service'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private elem:ElementRef){ }

  
}




