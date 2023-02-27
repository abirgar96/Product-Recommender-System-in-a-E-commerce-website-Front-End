import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyproductComponent } from './sortbyproduct.component';

describe('SortbyproductComponent', () => {
  let component: SortbyproductComponent;
  let fixture: ComponentFixture<SortbyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
