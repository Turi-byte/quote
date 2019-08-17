import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';
import { QuoteService } from './quote-service/quote.service';

@Pipe({
  name: 'orderByUpvotes',
  pure: false,
})
export class OrderByUpvotesPipe implements PipeTransform {

  constructor(private quoteService:QuoteService){}

  transform(quotes: Quote[]): Quote[] {
      return this.quoteService.quotes;
  }

}
