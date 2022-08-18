import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailCRendererComponent } from './button-detail-c-renderer.component';

describe('ButtonDetailCRendererComponent', () => {
  let component: ButtonDetailCRendererComponent;
  let fixture: ComponentFixture<ButtonDetailCRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailCRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailCRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
