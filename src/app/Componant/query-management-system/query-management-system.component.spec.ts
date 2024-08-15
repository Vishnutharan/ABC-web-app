import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementSystemComponent } from './query-management-system.component';

describe('QueryManagementSystemComponent', () => {
  let component: QueryManagementSystemComponent;
  let fixture: ComponentFixture<QueryManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
