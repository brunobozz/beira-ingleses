import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegrasComponent } from './page-regras.component';

describe('PageRegrasComponent', () => {
  let component: PageRegrasComponent;
  let fixture: ComponentFixture<PageRegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
