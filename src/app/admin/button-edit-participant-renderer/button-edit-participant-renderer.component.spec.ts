import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditParticipantRendererComponent } from './button-edit-participant-renderer.component';

describe('ButtonEditParticipantRendererComponent', () => {
  let component: ButtonEditParticipantRendererComponent;
  let fixture: ComponentFixture<ButtonEditParticipantRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditParticipantRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditParticipantRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
