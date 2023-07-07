import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worksection2Component } from './worksection2.component';

describe('Worksection2Component', () => {
  let component: Worksection2Component;
  let fixture: ComponentFixture<Worksection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Worksection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Worksection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
