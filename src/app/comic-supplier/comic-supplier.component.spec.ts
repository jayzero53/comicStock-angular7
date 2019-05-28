import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSupplierComponent } from './comic-supplier.component';

describe('ComicSupplierComponent', () => {
  let component: ComicSupplierComponent;
  let fixture: ComponentFixture<ComicSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
