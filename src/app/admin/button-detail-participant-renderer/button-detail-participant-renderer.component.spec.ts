import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailParticipantRendererComponent } from './button-detail-participant-renderer.component';

describe('ButtonDetailParticipantRendererComponent', () => {
  let component: ButtonDetailParticipantRendererComponent;
  let fixture: ComponentFixture<ButtonDetailParticipantRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailParticipantRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailParticipantRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
