import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoneyReactiveFormComponent } from './poney-reactive-form.component';

describe('PoneyReactiveFormComponent', () => {
  let component: PoneyReactiveFormComponent;
  let fixture: ComponentFixture<PoneyReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoneyReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoneyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
