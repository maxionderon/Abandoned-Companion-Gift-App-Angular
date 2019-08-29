import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCompanionTableComponent } from './gift-companion-table.component';

describe('GiftCompanionTableComponent', () => {
  let component: GiftCompanionTableComponent;
  let fixture: ComponentFixture<GiftCompanionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCompanionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCompanionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
