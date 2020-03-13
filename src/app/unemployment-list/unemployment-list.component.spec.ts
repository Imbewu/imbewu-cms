import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemploymentListComponent } from './unemployment-list.component';

describe('UnemploymentListComponent', () => {
  let component: UnemploymentListComponent;
  let fixture: ComponentFixture<UnemploymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemploymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemploymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
