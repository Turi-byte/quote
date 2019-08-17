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


  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete,index){
    let toDelete = confirm(`Are you sure you wanna delete ${this.quotes[index].publisher}'s quote?`)
    if (toDelete){
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  constructor() { }
}
