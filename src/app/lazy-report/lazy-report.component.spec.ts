/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazyReportComponent } from './lazy-report.component';

describe('LazyReportComponent', () => {
  let component: LazyReportComponent;
  let fixture: ComponentFixture<LazyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
