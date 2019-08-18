import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote';
import {QuoteService } from '../quote-service/quote.service'
import { AlertService } from '../alert-service/alert.service';
import { Quotes } from '../quote-class/quote'
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[];
  alertService:AlertService;
  quote:Quotes;

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete,index){
    let toDelete = confirm(`Are you sure you wanna delete ${this.quotes[index].publisher}'s quote?`)
    if (toDelete){
      this.quotes.splice(index,1);
      this.alertService.alertMe("The quote has been deleted")
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor(quoteService:QuoteService,alertService:AlertService,private http:HttpClient,private quotesService:QuoteRequestService) {
    this.quotes = quoteService.getQuotes()
    this.alertService = alertService;
   }

  ngOnInit() {
    this.quotesService.quoteRequest()
    this.quote = this.quotesService.quote
    }

}