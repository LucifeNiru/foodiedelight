import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePopupComponent } from './add-update-popup.component';

describe('AddUpdatePopupComponent', () => {
  let component: AddUpdatePopupComponent;
  let fixture: ComponentFixture<AddUpdatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
