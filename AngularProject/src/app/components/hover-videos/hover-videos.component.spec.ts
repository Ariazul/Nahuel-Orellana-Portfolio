import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverVideosComponent } from './hover-videos.component';

describe('HoverVideosComponent', () => {
  let component: HoverVideosComponent;
  let fixture: ComponentFixture<HoverVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
