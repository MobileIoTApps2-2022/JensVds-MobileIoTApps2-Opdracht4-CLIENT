import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpageComponent } from './controlpage.component';

describe('ControlpageComponent', () => {
  let component: ControlpageComponent;
  let fixture: ComponentFixture<ControlpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
