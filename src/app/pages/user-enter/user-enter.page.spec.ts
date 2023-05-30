import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEnterPage } from './user-enter.page';

describe('UserEnterPage', () => {
  let component: UserEnterPage;
  let fixture: ComponentFixture<UserEnterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserEnterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
