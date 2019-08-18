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

  getQuote(id){
    for (let quote of Quotes){
      if(quote.id == id){
        return quote;
      }
    }
  }
  constructor() { }
}
