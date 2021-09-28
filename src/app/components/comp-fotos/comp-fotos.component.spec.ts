import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFotosComponent } from './comp-fotos.component';

describe('CompFotosComponent', () => {
  let component: CompFotosComponent;
  let fixture: ComponentFixture<CompFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
