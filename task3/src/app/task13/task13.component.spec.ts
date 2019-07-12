import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task13Component } from './task13.component';

describe('Task13Component', () => {
  let component: Task13Component;
  let fixture: ComponentFixture<Task13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
