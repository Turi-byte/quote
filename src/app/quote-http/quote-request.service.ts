import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quotes } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote: Quotes;

  constructor(private http:HttpClient) {
    this.quote = new Quotes("","");
   }

   quoteRequest(){
    interface ApiResponse{
      quote:string;
      author:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = "Coding Crazy!"
        this.quote.author = "The Turi Way"

        reject(error)
      })
    })
    return promise
  }

}
