import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicplayer6Component } from './musicplayer6.component';

describe('Musicplayer6Component', () => {
  let component: Musicplayer6Component;
  let fixture: ComponentFixture<Musicplayer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musicplayer6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musicplayer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
