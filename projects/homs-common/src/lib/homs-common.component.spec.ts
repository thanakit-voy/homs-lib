import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomsCommonComponent } from './homs-common.component';

describe('HomsCommonComponent', () => {
  let component: HomsCommonComponent;
  let fixture: ComponentFixture<HomsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomsCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
