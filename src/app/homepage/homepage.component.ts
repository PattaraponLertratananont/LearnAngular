import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name:string=''
  names = ["Ball","Game",'Pluem',"M"]
  constructor() { }
  
  ngOnInit() {
  }
  eventFromOuter(pass:string){
    this.name="Hello "+pass
  }
}
