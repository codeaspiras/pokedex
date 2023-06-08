import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericButtonGridComponent } from './numeric-button-grid.component';

describe('NumericButtonGridComponent', () => {
  let component: NumericButtonGridComponent;
  let fixture: ComponentFixture<NumericButtonGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumericButtonGridComponent]
    });
    fixture = TestBed.createComponent(NumericButtonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
