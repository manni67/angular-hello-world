"use strict";

import { Component, forwardRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingDataService } from '../hello-services/greeting-data.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  greetingDataService: GreetingDataService;
  helloWorldText1: String;
  helloWorldText2: String;
  hidden: boolean;
  buttonToggle: String;
  buttonSwitch2Page2: String;
  buttonSort: String;
  helloList: {part1: String, part2:String}[];
  nav: Router;
  
  // Constructor with the Dependency Injection of the GreetingDataService
  constructor(private greetings: GreetingDataService, router: Router) { 
  	this.helloList = greetings.getHelloList();
  	this.helloWorldText1 = greetings.getHelloWorldText1();
  	this.helloWorldText2 = greetings.getHelloWorldText2();
  	this.buttonToggle = greetings.getButtonToggleText();
    this.buttonSwitch2Page2 = greetings.getButtonSwitch2Page2Text();
  	this.greetingDataService = greetings;
    this.buttonSort = greetings.getButtonSortText();
    this.nav = router;
   }

  ngOnInit() {
  }
  
  // determine whether "hello world" should be hidden or visible; ask the greetingDataService;
  toggleFunc(): void {
    this.hidden = this.greetingDataService.toggleHidden();
  }

  sortAlternated(): void {
    this.greetingDataService.sortAlternated();
  }

  switch2Page2(): void {
    this.nav.navigate(['..','info-box2']);
  }
}
