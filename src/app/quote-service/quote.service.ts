import { Injectable } from '@angular/core';
import { Quote } from '../quote';
import { Quotes } from '../quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes: Quote[]= [];
  
  sort(){
    this.quotes
    .sort((a:Quote,b:Quote)=>{
      return a.upvotes.valueOf()-b.upvotes.valueOf();
    });
  }

  getQuotes(){
    return Quotes
  }

  constructor() { }
}
