import { Component, OnInit, Input } from '@angular/core';
import { IBatch } from '../batch';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

 @Input() batch:IBatch;
  constructor() { }

  ngOnInit() {
  }


}
