import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task12Component } from './task12.component';

describe('Task12Component', () => {
  let component: Task12Component;
  let fixture: ComponentFixture<Task12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
