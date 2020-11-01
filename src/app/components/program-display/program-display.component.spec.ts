import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDisplayComponent } from './program-display.component';

describe('ProgramDisplayComponent', () => {
  let component: ProgramDisplayComponent;
  let fixture: ComponentFixture<ProgramDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
