import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryParticipantComponent } from './history-participant.component';

describe('HistoryParticipantComponent', () => {
  let component: HistoryParticipantComponent;
  let fixture: ComponentFixture<HistoryParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
