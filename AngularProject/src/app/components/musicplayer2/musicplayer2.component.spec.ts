import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicplayer2Component } from './musicplayer2.component';

describe('Musicplayer2Component', () => {
  let component: Musicplayer2Component;
  let fixture: ComponentFixture<Musicplayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musicplayer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musicplayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
