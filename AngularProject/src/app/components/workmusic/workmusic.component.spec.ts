import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmusicComponent } from './workmusic.component';

describe('WorkmusicComponent', () => {
  let component: WorkmusicComponent;
  let fixture: ComponentFixture<WorkmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
