import { Injectable } from '@angular/core';
import { Quote } from '../quote';
import { Quotes } from '../quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes: Quote[]= [];
  
  
  getQuotes(){
    return Quotes
  }

  getsortQuotes(upvotes) {
    for(let quote of Quotes){
      if (quote.upvotes == Math.max(quote.upvotes)){
        return quote;
      }
    }
  }

  getQuote(id){
    for (let quote of Quotes){
      if(quote.id == id){
        return quote;
      }
    }
  }
  constructor() { }
}
