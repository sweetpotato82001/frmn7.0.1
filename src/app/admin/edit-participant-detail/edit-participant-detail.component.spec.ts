import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticipantDetailComponent } from './edit-participant-detail.component';

describe('EditParticipantDetailComponent', () => {
  let component: EditParticipantDetailComponent;
  let fixture: ComponentFixture<EditParticipantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParticipantDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParticipantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
