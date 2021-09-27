import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFlexItensComponent } from './comp-flex-itens.component';

describe('CompFlexItensComponent', () => {
  let component: CompFlexItensComponent;
  let fixture: ComponentFixture<CompFlexItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFlexItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFlexItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
