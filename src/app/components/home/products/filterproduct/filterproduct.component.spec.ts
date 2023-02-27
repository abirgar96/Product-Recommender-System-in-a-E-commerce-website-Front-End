import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterproductComponent } from './filterproduct.component';

describe('FilterproductComponent', () => {
  let component: FilterproductComponent;
  let fixture: ComponentFixture<FilterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
