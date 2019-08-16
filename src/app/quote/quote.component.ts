import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]= [
    {id:1,name:'Never,never give up.',author:'Winston Churchill',publisher:'Turi'},
    {id:2,name:'Teach me how to dougie up in this.',author:'Soulja Boy',publisher:'Lucy'},
    {id:3,name:'A poor workman quarrels with his tools',author:'Winchester men',publisher:'Steve'},
    {id:4,name:'Pride comes before a fall',author:'Marcus Riley',publisher:'Marcus'},
    {id:5,name:'Whatever it takes',author:'Timmy Tdat',publisher:'Jeff'},
    {id:6,name:'One mans trash is another man\'s treasure',author:'Mr.Anonymous',publisher:'Kibe'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
