import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsTestComponent } from './view-details-test.component';

describe('ViewDetailsTestComponent', () => {
  let component: ViewDetailsTestComponent;
  let fixture: ComponentFixture<ViewDetailsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
