import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCadastroComponent } from './os-cadastro.component';

describe('OsCadastroComponent', () => {
  let component: OsCadastroComponent;
  let fixture: ComponentFixture<OsCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
