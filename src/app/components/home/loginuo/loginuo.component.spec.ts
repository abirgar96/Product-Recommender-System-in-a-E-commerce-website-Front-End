import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuoComponent } from './loginuo.component';

describe('LoginuoComponent', () => {
  let component: LoginuoComponent;
  let fixture: ComponentFixture<LoginuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
