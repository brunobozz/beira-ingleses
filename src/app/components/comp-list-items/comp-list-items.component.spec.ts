import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompListItemsComponent } from './comp-list-items.component';

describe('CompListItemsComponent', () => {
  let component: CompListItemsComponent;
  let fixture: ComponentFixture<CompListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
