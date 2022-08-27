import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBox2Component } from './info-box2.component';

describe('InfoBox2Component', () => {
  let component: InfoBox2Component;
  let fixture: ComponentFixture<InfoBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
