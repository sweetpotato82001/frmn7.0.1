import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NageurHistoryComponent } from './nageur-history.component';

describe('NageurHistoryComponent', () => {
  let component: NageurHistoryComponent;
  let fixture: ComponentFixture<NageurHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NageurHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NageurHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
