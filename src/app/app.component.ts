import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes: string [];
 constructor(){
   this.quotes =['Never,never give up','Don\'t lose faith','Teach my how to dougie']
 }
}
