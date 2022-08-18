import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailC1RendererComponent } from './button-detail-c1-renderer.component';

describe('ButtonDetailC1RendererComponent', () => {
  let component: ButtonDetailC1RendererComponent;
  let fixture: ComponentFixture<ButtonDetailC1RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailC1RendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailC1RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
