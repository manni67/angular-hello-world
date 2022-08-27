import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-box2',
  templateUrl: './info-box2.component.html',
  styleUrls: ['./info-box2.component.scss']
})
export class InfoBox2Component implements OnInit {

  private router: Router;
  buttonSwitch2Page1: String = "switch to page 1";

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  switch2Page1() {
    this.router.navigate(['..','info-box'])
  }

}
