import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsRegisterComponent } from './os-register.component';

describe('OsRegisterComponent', () => {
  let component: OsRegisterComponent;
  let fixture: ComponentFixture<OsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
