import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote';
import {QuoteService } from '../quote-service/quote.service'
import { AlertService } from '../alert-service/alert.service';
import { Quotes } from '../quote-class/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[];
  alertService:AlertService;
  quote:Quotes;
  bestquote: Quote[];

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

  upvotes(i){
    this.quotes[i].upvotes += 1;
  }

  highestVotes: number = 0;
  quotesIndex: number = 0;
  calculateHighestVotes(){
    for(var i = 0; i< this.quotes.length;i++){
      if(this.quotes[i].upvotes > this.highestVotes){
        this.highestVotes = this.quotes[i].upvotes;
        this.quotesIndex = i;
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor(quoteService:QuoteService,alertService:AlertService,private http:HttpClient) {
    this.quotes = quoteService.getQuotes()
    this.alertService = alertService;
   }

  ngOnInit() {
    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quotes(data.author, data.quote)
    },err=>{
        this.quote = new Quotes("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  
  }

}