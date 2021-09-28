import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItensComponent } from './page-itens.component';

describe('PageItensComponent', () => {
  let component: PageItensComponent;
  let fixture: ComponentFixture<PageItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
