import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionHistoryComponent } from './competition-history.component';

describe('CompetitionHistoryComponent', () => {
  let component: CompetitionHistoryComponent;
  let fixture: ComponentFixture<CompetitionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
