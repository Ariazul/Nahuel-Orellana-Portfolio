import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicplayer4Component } from './musicplayer4.component';

describe('Musicplayer4Component', () => {
  let component: Musicplayer4Component;
  let fixture: ComponentFixture<Musicplayer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musicplayer4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musicplayer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
