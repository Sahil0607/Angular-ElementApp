import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NewElementComponent } from './new-element/new-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NewElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    HelloWorldComponent,
    NewElementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {};

  ngDoBootstrap() {
    const elements: any[] = [
      [NewElementComponent, 'new-element'],
      [HelloWorldComponent, 'hello-world']
    ];

    for(const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);  // Registerd in browser. // app-framework-poll
    }
  }
 }
