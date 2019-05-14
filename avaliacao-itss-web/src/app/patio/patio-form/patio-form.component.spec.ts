import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioFormComponent } from './patio-form.component';

describe('PatioFormComponent', () => {
  let component: PatioFormComponent;
  let fixture: ComponentFixture<PatioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
