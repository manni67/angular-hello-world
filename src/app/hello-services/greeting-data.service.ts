"use strict";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingDataService {

  private hidden: boolean = false;

  private helloList = [
  	{ part1: "hello", part2: "world" },
  	{ part1: "servus", part2: "manfred" },
  	{ part1: "hi", part2: "andi" },
    { part1: "hallo", part2: "zusammen"}
  ];

  private isAsc: boolean = true;

  getHelloList() {
  	return this.helloList;
  }
  
  getHelloWorldText1(): String {
  	return "hello world via Data Binding!";
  }

  getHelloWorldText2(): String {
  	return "hello world";
  }
  
  getButtonToggleText(): String {
    return "switch visibility and color";
  }

  getButtonSwitch2Page2Text(): String {
    return "switch to page 2"
  }
    
  getButtonSortText(): String {
    return "Sort alternated";
  }

  toggleHidden(): boolean {
    this.hidden = !this.hidden
	  return this.hidden;
  }
  
  sortAlternated(): void {
    // sort hello list
    let s: number = this.isAsc ? 1 : -1;
    this.helloList.sort((a,b) => {
      if (a.part1 < b.part1) return -s;
      if (a.part1 == b.part1) return 0;
      return s;
    })
    this.isAsc = !this.isAsc;
  }

  isHidden(): boolean {
  	return this.hidden;
  }

  constructor() { }
}
