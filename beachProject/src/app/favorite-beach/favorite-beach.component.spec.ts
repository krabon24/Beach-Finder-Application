import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBeachComponent } from './favorite-beach.component';

describe('FavoriteBeachComponent', () => {
  let component: FavoriteBeachComponent;
  let fixture: ComponentFixture<FavoriteBeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
