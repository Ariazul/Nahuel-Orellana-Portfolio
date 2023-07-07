import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skillssection2Component } from './skillssection2.component';

describe('Skillssection2Component', () => {
  let component: Skillssection2Component;
  let fixture: ComponentFixture<Skillssection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Skillssection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skillssection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
