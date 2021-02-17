import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectConsentComponent } from './reject-consent.component';

describe('RejectConsentComponent', () => {
  let component: RejectConsentComponent;
  let fixture: ComponentFixture<RejectConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectConsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
