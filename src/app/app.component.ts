import { Component } from '@angular/core';
import { Quote } from './quote'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes: Quote[]= [
  {id:1,name:'Never,never give up.',author:'Winston Churchill'},
  {id:2,name:'Teach me how to dougie up in this.',author:'Soulja Boy'},
  {id:3,name:'A poor workman quarrels with his tools',author:'Winchester men'},
  {id:4,name:'Pride comes before a fall',author:'Marcus Riley'},
  {id:5,name:'Whatever it takes',author:'Timmy Tdat'},
  {id:6,name:'One mans trash is another man\'s treasure',author:'Mr.Anonymous'},
 ];
}
