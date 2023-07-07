import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailcolumnComponent } from './mailcolumn.component';

describe('MailcolumnComponent', () => {
  let component: MailcolumnComponent;
  let fixture: ComponentFixture<MailcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailcolumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
