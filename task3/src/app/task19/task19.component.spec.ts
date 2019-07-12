import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task19Component } from './task19.component';

describe('Task19Component', () => {
  let component: Task19Component;
  let fixture: ComponentFixture<Task19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
