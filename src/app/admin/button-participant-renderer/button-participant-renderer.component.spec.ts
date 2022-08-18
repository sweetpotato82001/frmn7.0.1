import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParticipantRendererComponent } from './button-participant-renderer.component';

describe('ButtonParticipantRendererComponent', () => {
  let component: ButtonParticipantRendererComponent;
  let fixture: ComponentFixture<ButtonParticipantRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonParticipantRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonParticipantRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
