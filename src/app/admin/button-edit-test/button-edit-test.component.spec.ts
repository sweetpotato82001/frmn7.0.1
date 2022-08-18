import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditTestComponent } from './button-edit-test.component';

describe('ButtonEditTestComponent', () => {
  let component: ButtonEditTestComponent;
  let fixture: ComponentFixture<ButtonEditTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
