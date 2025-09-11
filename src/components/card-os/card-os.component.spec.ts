import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOsComponent } from './card-os.component';

describe('CardOsComponent', () => {
  let component: CardOsComponent;
  let fixture: ComponentFixture<CardOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
