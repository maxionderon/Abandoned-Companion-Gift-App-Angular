import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsComponent } from './companions.component';

describe('CompanionsComponent', () => {
  let component: CompanionsComponent;
  let fixture: ComponentFixture<CompanionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
