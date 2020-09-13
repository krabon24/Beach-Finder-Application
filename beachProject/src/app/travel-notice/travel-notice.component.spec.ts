import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelNoticeComponent } from './travel-notice.component';

describe('TravelNoticeComponent', () => {
  let component: TravelNoticeComponent;
  let fixture: ComponentFixture<TravelNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
