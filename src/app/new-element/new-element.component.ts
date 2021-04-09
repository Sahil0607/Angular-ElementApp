import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NewElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('This is constructor from new-element');
  }

}
