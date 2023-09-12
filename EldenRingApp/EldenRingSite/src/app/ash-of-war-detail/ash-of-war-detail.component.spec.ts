import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshOfWarDetailComponent } from './ash-of-war-detail.component';

describe('AshOfWarDetailComponent', () => {
  let component: AshOfWarDetailComponent;
  let fixture: ComponentFixture<AshOfWarDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AshOfWarDetailComponent]
    });
    fixture = TestBed.createComponent(AshOfWarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
