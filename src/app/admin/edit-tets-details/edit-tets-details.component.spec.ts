import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTetsDetailsComponent } from './edit-tets-details.component';

describe('EditTetsDetailsComponent', () => {
  let component: EditTetsDetailsComponent;
  let fixture: ComponentFixture<EditTetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTetsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
