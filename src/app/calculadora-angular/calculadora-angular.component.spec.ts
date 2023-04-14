import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAngularComponent } from './calculadora-angular.component';

describe('CalculadoraAngularComponent', () => {
  let component: CalculadoraAngularComponent;
  let fixture: ComponentFixture<CalculadoraAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
