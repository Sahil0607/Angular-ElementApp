import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent implements OnInit {
  @Input() name: string;
  displayMessage: boolean = true;
  constructor() { }

  ngOnInit(): void {}

  showMessage() {
    // const el = document.getElementById('hello');
    // // const el = document.querySelector("#hello").createShadowRoot();
    // if (this.displayMessage) {
    //   el.innerHTML = 'Hello this is new elment';
    //   this.displayMessage = !this.displayMessage;
    //   // el.innerHTML = '<app-new-element></app-new-element>';
    // } else {
    //   el.innerHTML = '';
    //   this.displayMessage = !this.displayMessage;
    // }
    console.log('My name is ', this.name);
    this.displayMessage = !this.displayMessage;
  }

}
