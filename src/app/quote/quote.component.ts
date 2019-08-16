import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[];
  
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete,index){
    let toDelete = confirm(`Are you sure you wanna delete ${this.quotes[index].publisher}'s quote?`)
    if (toDelete){
      this.quotes.splice(index,1);
    }
  }

  constructor(quoteService:QuoteService) { 
    this.quotes = quoteService.getQuotes()
  }

  ngOnInit() {
  }

}
