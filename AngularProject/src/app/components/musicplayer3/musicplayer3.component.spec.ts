import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicplayer3Component } from './musicplayer3.component';

describe('Musicplayer3Component', () => {
  let component: Musicplayer3Component;
  let fixture: ComponentFixture<Musicplayer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musicplayer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musicplayer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
