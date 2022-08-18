import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTetsComponent } from './view-tets.component';

describe('ViewTetsComponent', () => {
  let component: ViewTetsComponent;
  let fixture: ComponentFixture<ViewTetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
