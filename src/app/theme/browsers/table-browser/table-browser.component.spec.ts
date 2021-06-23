import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBrowserComponent } from './table-browser.component';

describe('TableBrowserComponent', () => {
  let component: TableBrowserComponent;
  let fixture: ComponentFixture<TableBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
