import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarrerComponent } from './user-carrer.component';

describe('UserCarrerComponent', () => {
  let component: UserCarrerComponent;
  let fixture: ComponentFixture<UserCarrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCarrerComponent]
    });
    fixture = TestBed.createComponent(UserCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
