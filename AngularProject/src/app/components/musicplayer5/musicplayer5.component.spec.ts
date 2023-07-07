import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicplayer5Component } from './musicplayer5.component';

describe('Musicplayer5Component', () => {
  let component: Musicplayer5Component;
  let fixture: ComponentFixture<Musicplayer5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musicplayer5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musicplayer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
