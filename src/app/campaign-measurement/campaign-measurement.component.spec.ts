import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMeasurementComponent } from './campaign-measurement.component';

describe('CampaignMeasurementComponent', () => {
  let component: CampaignMeasurementComponent;
  let fixture: ComponentFixture<CampaignMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
