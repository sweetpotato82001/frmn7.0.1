import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailC2RendererComponent } from './button-detail-c2-renderer.component';

describe('ButtonDetailC2RendererComponent', () => {
  let component: ButtonDetailC2RendererComponent;
  let fixture: ComponentFixture<ButtonDetailC2RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailC2RendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailC2RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
