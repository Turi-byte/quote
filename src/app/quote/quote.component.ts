import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Never,never give up.', 'Winston Churchill', 'Turi',new Date(2019,0,9),0,0),
    new Quote(2, 'Teach me how to dougie up in this.', 'Soulja Boy','Lucy',new Date(2019,0,11),0,0),
    new Quote(3, 'A poor workman quarrels with his tools', 'Winchester men', 'Steve',new Date(2019,2,9),0,0),
    new Quote(4, 'Pride comes before a fall', 'Marcus Riley', 'Marcus',new Date(2019,9,9),0,0),
    new Quote(5, 'Whatever it takes', 'Timmy Tdat', 'Jeff',new Date(2019,8,11),0,0),
    new Quote(6, 'One mans trash is another man\'s treasure', 'Mr.Anonymous', 'Kibe',new Date(2019,21,10),0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete,index){
    let toDelete = confirm(`Are you sure you wanna delete this?`)
    if (toDelete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
