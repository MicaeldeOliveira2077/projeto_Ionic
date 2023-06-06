import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoListPage } from './produto-list.page';

describe('ProdutoListPage', () => {
  let component: ProdutoListPage;
  let fixture: ComponentFixture<ProdutoListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
