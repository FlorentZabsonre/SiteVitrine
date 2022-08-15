import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitsComponent } from './categorie-produits.component';

describe('CategorieProduitsComponent', () => {
  let component: CategorieProduitsComponent;
  let fixture: ComponentFixture<CategorieProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
